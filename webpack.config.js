const path = require( 'path' );
const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const WebpackZipPlugin = require('webpack-zip-plugin')

const pluginSlug = 'enhanced-ajax-add-to-cart-wc';

const buildFolder  = path.resolve( __dirname, pluginSlug );
// const trunkFolder  = path.resolve( buildFolder, 'trunk' );
// const tagsFolder   = path.resolve( buildFolder, 'tags' );
// const assetsFolder = path.resolve( buildFolder, 'assets' );
const endPath = '/Users/parker/Documents/theritesites/completed_plugins';
const endFolder = endPath + '/' + pluginSlug;

module.exports = {
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
	plugins: [
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
	]
};

