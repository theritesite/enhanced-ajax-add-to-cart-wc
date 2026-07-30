const path = require( 'path' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
// NOTE: ../trs-build-targets is required lazily, inside the config function.
// It lives in the sibling wp-plugin-build repo, which a CI runner checking out
// only this plugin does not have. Requiring it at module scope would fail the
// build on a runner that never intended to deliver anywhere.
//
// REMOVED 2026-07-30: ./shared-configs/webpack-configs/plugins.webpack-config
// The last of three copies of an earlier attempt at what trs-build-targets.js now
// does, after add-to-cart-pro and aoc-wc. It failed because the machine paths
// stayed hardcoded inside the shared file, so sharing the config without
// externalising the paths only relocated the problem.

// TWO SLUGS, and conflating them broke the build.
//
//   enhanced-ajax-add-to-cart-for-woocommerce   the wordpress.org slug, the
//                                               directory the plugin installs as,
//                                               and now the text domain
//   enhanced-ajax-add-to-cart-wc                the main PHP file, the git repo,
//                                               and the asset FILENAMES
//
// The entry used to be built from the install slug:
//
//   entries['request'] = path.resolve( __dirname, 'assets/js', pluginSlug + '-public.js' )
//
// which resolves to assets/js/enhanced-ajax-add-to-cart-for-woocommerce-public.js.
// THAT FILE DOES NOT EXIST - the real one is
// assets/js/enhanced-ajax-add-to-cart-wc-public.js - so the build could not resolve
// its own entry. The shipped 2.4.0 predates the slug change that broke it.
//
// The main PHP file keeps its name deliberately. WordPress identifies a plugin by
// folder/file.php, so renaming it would make every existing install treat this as
// a different plugin and silently deactivate it.
const installSlug = 'enhanced-ajax-add-to-cart-for-woocommerce';
const assetSlug = 'enhanced-ajax-add-to-cart-wc';

// env and argv are DEFAULTED because `npm run build` deliberately passes neither:
// a machine-independent build must not need a delivery target.
const config = ( env = {}, argv = {} ) => {

	const isProduction = argv.mode === 'production';

	// MACHINE DELIVERY IS OPT-IN, via --env LOC. Compiling and packaging are
	// machine-independent; copying into a running WordPress install is not.
	const targets = env.LOC
		? require( '../trs-build-targets' ).resolve( installSlug, env.LOC )
		: null;

	if ( targets ) {
		console.log( `[trs] target ${ targets.target } (config: ${ targets.source })` );
		console.log( `[trs] dev -> ${ targets.devFolder }` );
	} else {
		console.log( '[trs] no --env LOC given - compiling only, no delivery.' );
	}

	// The release payload, matching what shipped in 2.4.0: assets, build,
	// includes, woo-includes, languages, the licence and readme, and the root PHP.
	// blocks/, dist/, src/ and vendor/ were commented out in the old shared-configs
	// and stay out.
	const payloadTo = ( destination ) => ( [
		{ from: path.resolve( __dirname, 'assets' ) + '/**', to: destination, noErrorOnMissing: true },
		{ from: path.resolve( __dirname, 'build' ) + '/**', to: destination, noErrorOnMissing: true },
		{ from: path.resolve( __dirname, 'languages' ) + '/**', to: destination, noErrorOnMissing: true },
		{ from: path.resolve( __dirname, 'includes' ) + '/**', to: destination, noErrorOnMissing: true },
		{ from: path.resolve( __dirname, 'woo-includes' ) + '/**', to: destination, noErrorOnMissing: true },
		{ from: path.resolve( __dirname, 'README.txt' ), to: destination, noErrorOnMissing: true },
		{ from: path.resolve( __dirname, 'LICENSE.txt' ), to: destination, noErrorOnMissing: true },
		{ from: path.resolve( __dirname, '*.php' ), to: destination, noErrorOnMissing: true },
	] );

	const requestToExternal = request => {
		const wcDepMap = {
			'@wordpress/api-fetch':  [ 'window',  'wp', 'apiFetch' ],
			'@wordpress/blocks':  [ 'window',  'wp', 'blocks' ],
			'@wordpress/data':  [ 'window',  'wp', 'data' ],
			'@wordpress/editor':  [ 'window',  'wp', 'editor' ],
			'@wordpress/element':  [ 'window',  'wp', 'element' ],
			'@wordpress/hooks':  [ 'window',  'wp', 'hooks' ],
			'@wordpress/url':  [ 'window',  'wp', 'url' ],
			'@wordpress/html-entities':  [ 'window',  'wp', 'htmlEntities' ],
			'@wordpress/i18n':  [ 'window',  'wp', 'i18n' ],
			'@wordpress/keycodes':  [ 'window',  'wp', 'keycodes' ],
			react: 'React',
			lodash: 'lodash',
			'react-dom': 'ReactDOM',
		};

		if ( wcDepMap[ request ] ) {
			return wcDepMap[ request ];
		}
	};

	const requestToHandle = request => {
	};

	const pluginList = [
		...defaultConfig.plugins.filter(
			plugin => plugin.constructor.name !== 'DependencyExtractionWebpackPlugin',
		),
		new DependencyExtractionWebpackPlugin( {
			injectPolyfill: true,
			requestToExternal,
			requestToHandle,
		} ),
	];

	// PRODUCTION DELIVERY IS NOT DONE HERE. CopyWebpackPlugin globs its sources
	// when a compilation starts but webpack writes its output when it ends, so
	// copying the build's own product in the same pass is a race. `npm run deploy`
	// runs ../trs-deliver.js against the payload trs-package.js already staged.
	//
	// The watch path keeps CopyWebpackPlugin, because files need to land in the
	// site on every rebuild. It also rejects an empty `patterns` array, so it must
	// be omitted rather than given nothing to do.
	if ( ! isProduction && targets ) {
		pluginList.push( new CopyWebpackPlugin( { patterns: payloadTo( targets.devFolder ) } ) );
	}

	// defaultConfig.entry is a function in @wordpress/scripts 20+ and a plain
	// object in older releases. Handled both ways so a toolchain bump does not
	// break this line.
	const baseEntry = typeof defaultConfig.entry === 'function'
		? defaultConfig.entry()
		: { ...defaultConfig.entry };

	const entries = { ...baseEntry };
	// assetSlug, NOT installSlug - see the note at the top of this file.
	entries['request'] = path.resolve(__dirname, 'assets/js', assetSlug + '-public.js')

	// module.rules is NOT overridden. @wordpress/scripts 34 compiles JS and JSX
	// itself, and the rules that used to be appended here loaded
	// 'transform-es2015-template-literals' - a BABEL 6 plugin name that does not
	// exist under Babel 7, so they could only ever have worked with the old
	// dependency tree.
	return {
		...defaultConfig,
		plugins: pluginList,
		watchOptions: {
			ignored: ['**/build/**', '**/node_modules'],
		},
		entry: {
			...entries,
		},
	}
}

module.exports = config;
