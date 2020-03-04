const path = require( 'path' );
const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const WebpackZipPlugin = require('webpack-zip-plugin');
const browserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const { kebabCase } = require( 'lodash' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

// const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

const pluginSlug = 'enhanced-ajax-add-to-cart-wc';

const buildFolder  = path.resolve( __dirname, pluginSlug );
// const trunkFolder  = path.resolve( buildFolder, 'trunk' );
// const tagsFolder   = path.resolve( buildFolder, 'tags' );
// const assetsFolder = path.resolve( buildFolder, 'assets' );
// const endPath = '/Users/parker/Documents/theritesites/completed_plugins';

var devFolder = '';
var endPath = '';

const requestToExternal = request => {
	const wcDepMap = {
		'@woocommerce/components': [ 'window', 'wc', 'components' ],
		'@woocommerce/csv-export': [ 'window', 'wc', 'csvExport' ],
		'@woocommerce/currency': [ 'window', 'wc', 'currency' ],
		'@woocommerce/date': [ 'window', 'wc', 'date' ],
		'@woocommerce/navigation': [ 'window', 'wc', 'navigation' ],
		'@woocommerce/number': [ 'window', 'wc', 'number' ],
		'@woocommerce/settings': [ 'window', 'wc', 'wcSettings' ],
	};

	if ( wcDepMap[ request ] ) {
		return wcDepMap[ request ];
	}
};

const requestToHandle = request => {
	const wcHandleMap = {
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
	}
};

const config = env => {

    const pluginList = [
		new DependencyExtractionWebpackPlugin( {
			injectPolyfill: true,
			requestToExternal,
			requestToHandle,
		} ),
	];
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


    if(env.NODE_ENV === 'production' ) {
        pluginList.push(
			new CopyWebpackPlugin( [
					{ from: path.resolve( __dirname, 'admin' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'blocks' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'build' ) + '/**', to: buildFolder },
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
			new browserSyncPlugin({
				files: [
					'./' + pluginSlug + '.php',
					'./includes/*.php',
					'./includes/**/*.php',
					'./',
					'!./node_modules',
					'!./yarn-error.log',
					'!./*.json',
					'!./Gruntfile.js',
					'!./README.md',
					'!./*.xml',
					'!./*.yml'
				],
				reloadDelay: 0
			}),
			new CopyWebpackPlugin( [
				{ from: path.resolve( __dirname, 'admin' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'blocks' ) + '/**', to: devFolder },
				{ from: path.resolve( __dirname, 'build' ) + '/**', to: devFolder },
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
	}

    return {
		// entry: [
		// 	path.resolve(__dirname, 'public/js', pluginSlug + '-public.js')
		// ],
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

        module: {
			rules: [
				{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@wordpress/babel-preset-default', '@babel/preset-env' ],
                        }
                    }
                },
	
				{
					test: /\.(css|scss)$/,
					use: ['style-loader', 'css-loader']
				},
			]
		},
		plugins: pluginList
	}
}

module.exports = config;