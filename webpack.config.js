const path = require( 'path' );
const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const WebpackZipPlugin = require('webpack-zip-plugin');
const browserSyncPlugin = require( 'browser-sync-webpack-plugin' );

const pluginSlug = 'enhanced-ajax-add-to-cart-wc';

const buildFolder  = path.resolve( __dirname, pluginSlug );
// const trunkFolder  = path.resolve( buildFolder, 'trunk' );
// const tagsFolder   = path.resolve( buildFolder, 'tags' );
// const assetsFolder = path.resolve( buildFolder, 'assets' );
// const endPath = '/Users/parker/Documents/theritesites/completed_plugins';

var devFolder = '';
var endPath = '';

const config = env => {

    const pluginList = [];
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
					{ from: path.resolve( __dirname, 'public' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'includes' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'languages' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'woo-includes' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, 'vendor' ) + '/**', to: buildFolder },
					{ from: path.resolve( __dirname, '*.txt' ), to: buildFolder },
					{ from: path.resolve( __dirname, '*.php' ), to: buildFolder },
					/** Above is what will be zipped. Below is code for repositories **/
					{ from: path.resolve( __dirname, 'admin' ) + '/**', to: endFolder },
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
		entry: [
			path.resolve(__dirname, 'public/js', pluginSlug + '-public.js')
		],
		output: {
			filename: pluginSlug + '.min.js',
			path: path.resolve( __dirname, 'public/js' ),
			// path: path.resolve( __dirname, 'build' ),
			publicPath: '/'
		},

        module: {
			rules: [
				{
					test: /\.js/,
					exclude: /node_modules/,
					loaders: [ 'babel-loader' ]
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