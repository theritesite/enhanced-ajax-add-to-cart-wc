const path = require( 'path' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const getNewPreconfiguredPlugins = require("./shared-configs/webpack-configs/plugins.webpack-config")

const pluginSlug = 'enhanced-ajax-add-to-cart-wc';

const buildFolder  = path.resolve( __dirname, pluginSlug );

const config = env => {
	console.log(env.NODE_ENV);
	console.log(env.LOC);
	
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

	let newPluginsAvailable = getNewPreconfiguredPlugins(env.NODE_ENV, env.LOC, pluginSlug, buildFolder, __dirname)

	const A2CPackages = [
		'a2cp',
		// 'a2cp-group',
	];

	// console.log(defaultConfig.entry());
	let entries = defaultConfig.entry()
	entries['request'] = path.resolve(__dirname, 'assets/js', pluginSlug + '-public.js')
	// console.log(entries);

	return {
		...defaultConfig,
		plugins: [...pluginList, newPluginsAvailable.definePlugin],
		watchOptions: {
			ignored: ['**/build/**', '**/node_modules'],
		},
		entry: {
			...entries,
			// ...defaultConfig.entry,
			// a2cp: path.resolve(__dirname, 'src/a2cp'),
		},
		// output: {
		// 	...defaultConfig.output,
		// 	filename: ( data ) => {
		// 		console.log("sending file name: ", data)
		// 		return A2CPackages.includes( data.chunk.name )
		// 			? './build/a2cp/[name].js'
		// 			: './build/[name]/a2c-submit.js';
		// 	},
		// }
		// output: {
		// 	filename: ( data ) => {
		// 		return A2CPackages.includes( data.chunk.name )
		// 			? './dist/blocks/[name].js'
		// 			: './dist/[name]/a2c-submit.js';
		// 	},
			// filename: 'build/[name].js'
			// path: path.resolve( __dirname, 'build'),
		// 	library: [ 'trs', '[modulename]' ],
		// 	libraryTarget: 'this',
		// },
		// externals,
		// resolve: {
		// 	extensions: [ '.json', '.js', '.jsx' ],
		// 	modules: [ path.join( __dirname, 'client' ), 'node_modules' ],
		// 	alias: {
		// 		'gutenberg-components': path.resolve(
		// 			__dirname,
		// 			'node_modules/@wordpress/components/src'
		// 		),
		// 		// @todo - remove once https://github.com/WordPress/gutenberg/pull/16196 is released.
		// 		'react-spring': 'react-spring/web.cjs',
		// 	},
		// },
		module: {
			...defaultConfig.module,
			rules: [
				...defaultConfig.module.rules,
				// {
				// 	test: /\.(sa|sc|c)ss$/,
				// 	use: [
				// 		{
				// 			loader: MiniCssExtractPlugin.loader,
				// 		},
				// 		'css-loader',
				// 		// 'sass-loader',
				// 	],
				// },
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