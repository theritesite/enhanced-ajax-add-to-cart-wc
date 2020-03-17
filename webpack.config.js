const path = require( 'path' );
const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const WebpackZipPlugin = require('webpack-zip-plugin');

const pluginSlug = 'enhanced-ajax-add-to-cart-wc';

const buildFolder  = path.resolve( __dirname, pluginSlug );

var devFolder = '';
var endPath = '';

const config = env => {
	console.log(env.NODE_ENV);

	if ( env.LOC === "corsair" ) {
		devFolder = '/var/www/wpdev.com/public_html/wp-content/plugins/' + pluginSlug; // Corsair
		endPath = '/home/parkerm34/Documents/theritesites/completed_plugins'; // Corsair
	}
	if ( env.LOC === "mac" ) {
		devFolder = '/Users/parker/sites/localwptest/wp-content/plugins/' + pluginSlug; // Mac
		endPath = '/Users/parker/Documents/theritesites/completed_plugins'; // Mac
	}

	const endFolder = endPath + '/' + pluginSlug;

	const externals = {
		/*'@wordpress/api-fetch': { this: [ 'wp', 'apiFetch' ] },
		'@wordpress/blocks': { this: [ 'wp', 'blocks' ] },
		'@wordpress/data': { this: [ 'wp', 'data' ] },
		'@wordpress/editor': { this: [ 'wp', 'editor' ] },
		'@wordpress/element': { this: [ 'wp', 'element' ] },
		'@wordpress/hooks': { this: [ 'wp', 'hooks' ] },
		'@wordpress/url': { this: [ 'wp', 'url' ] },
		'@wordpress/html-entities': { this: [ 'wp', 'htmlEntities' ] },
		'@wordpress/i18n': { this: [ 'wp', 'i18n' ] },
		'@wordpress/keycodes': { this: [ 'wp', 'keycodes' ] },
		'@woocommerce/settings': { this: [ 'wc', 'wcSettings' ] },
		tinymce: 'tinymce',
		moment: 'moment',
		react: 'React',
		lodash: 'lodash',
		'react-dom': 'ReactDOM',*/
	};

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
	/*	const wcHandleMap = {
			'@woocommerce/components': 'wc-components',
			'@woocommerce/csv-export': 'wc-csv',
			'@woocommerce/currency': 'wc-currency',
			'@woocommerce/date': 'wc-date',
			'@woocommerce/navigation': 'wc-navigation',
			'@woocommerce/number': 'wc-number',
			'@woocommerce/settings': 'wc-settings',
		};

		if ( wcHandleMap[ request ] ) {
			return wcHandleMap[ request ];
		}*/
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
		new MiniCssExtractPlugin( {
			filename: 'style.css',
		} ),
	];

	const EAA2CPackages = [
		'eaa2c',
	];

	const entryPoints = {};
	EAA2CPackages.forEach( ( name ) => {
		entryPoints[ name ] = `./blocks/${ name }`;
	} );

	entryPoints['request'] = path.resolve(__dirname, 'public/js', pluginSlug + '-public.js');


	if(env.NODE_ENV === 'production' ) {
		pluginList.push(
			new CopyWebpackPlugin( [
					{ from: path.resolve( __dirname, 'admin' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'blocks' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'build' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'dist' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'public' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'includes' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'languages' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'woo-includes' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'vendor' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, '*.txt' ), to: buildFolder },
					{ from: path.resolve( __dirname, '*.php' ), to: buildFolder },
					/** Above is what will be zipped. Below is code for repositories **/
					{ from: path.resolve( __dirname, 'admin' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'blocks' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'build' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'dist' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'public' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'includes' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'languages' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'woo-includes' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, 'vendor' ) + '/**', to: endFolder },
					{ from: path.resolve( __dirname, '*.txt' ), to: endFolder },
					{ from: path.resolve( __dirname, '*.php' ), to: endFolder }
				], {

					// By default, we only copy modified files during
					// a watch or webpack-dev-server build. Setting this
					// to `true` copies all files.
					copyUnmodified: true
			} ),
			new WebpackZipPlugin( {
				initialFile: pluginSlug,
				endPath: endPath,
				zipName: pluginSlug + '.zip'
			} )
		);
	}
	else {
		pluginList.push(
			// new browserSyncPlugin({
			// 	files: [
			// 		'./' + pluginSlug + '.php',
			// 		'./includes/*.php',
			// 		'./includes/**/*.php',
			// 		'./',
			// 		'!./node_modules',
			// 		'!./yarn-error.log',
			// 		'!./*.json',
			// 		'!./Gruntfile.js',
			// 		'!./README.md',
			// 		'!./*.xml',
			// 		'!./*.yml'
			// 	],
			// 	reloadDelay: 0
			// }),
			new CopyWebpackPlugin( [
				{ from: path.resolve( __dirname, 'admin' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'blocks' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'build' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'dist' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'public' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'includes' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'languages' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'woo-includes' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'vendor' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, '*.txt' ), to: devFolder },
				{ from: path.resolve( __dirname, '*.php' ), to: devFolder },
			], {

				copyUnmodified: true
			} )
		);
	};

	return {
		...defaultConfig,
		plugins: pluginList,
		entry: {
			...entryPoints
		},
		output: {
			filename: ( data ) => {
				return EAA2CPackages.includes( data.chunk.name )
					? './dist/blocks/[name].js'
					: './dist/[name]/index.js';
			},
			path: __dirname,
			library: [ 'trs', '[modulename]' ],
			libraryTarget: 'this',
		},
		externals,
		resolve: {
			extensions: [ '.json', '.js', '.jsx' ],
			modules: [ path.join( __dirname, 'client' ), 'node_modules' ],
			alias: {
				'gutenberg-components': path.resolve(
					__dirname,
					'node_modules/@wordpress/components/src'
				),
				// @todo - remove once https://github.com/WordPress/gutenberg/pull/16196 is released.
				'react-spring': 'react-spring/web.cjs',
			},
		},
		module: {
			...defaultConfig.module,
			rules: [
				...defaultConfig.module.rules,
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.js?$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{ loose: true, modules: 'commonjs' },
								],
							],
							plugins: [ 'transform-es2015-template-literals' ],
						},
					},
					include: new RegExp(
						'/node_modules/(' +
							'|acorn-jsx' +
							'|d3-array' +
							'|debug' +
							'|regexpu-core' +
							'|unicode-match-property-ecmascript' +
							'|unicode-match-property-value-ecmascript)/'
					),
				},
			],
		},
	}
}


module.exports = config;
/*
    return {
		entry: {
			eaa2cBlocks: './blocks/eaa2c/index.js',
			eaa2cJS: path.resolve(__dirname, 'public/js', pluginSlug + '-public.js'),
		},
		output: {
			// filename: pluginSlug + '.min.js',
			filename: ( chunkData ) => {
				return `${ kebabCase( chunkData.chunk.name ) }.js`;
			},
			// path: path.resolve( __dirname, 'public/js' ),
			path: path.resolve( __dirname, 'build' ),
			library: [ 'eaa2c', '[name]' ],
			libraryTarget: 'this',
			// publicPath: '/'
		},

	}
}*/