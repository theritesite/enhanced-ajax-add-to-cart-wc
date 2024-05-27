const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const path = require( 'path' );

module.exports = ( mode, loc, pluginSlug, buildFolder, baseDir ) => {
	var devFolder = '';
	var endPath = '';
	console.log(mode);
	console.log(loc);

	if ( loc == "m1" ) {
		devFolder = '/Users/parkermathewson/mac-sites/wp56tester/wp-content/plugins/' + pluginSlug; // M1
		endPath = '/Users/parkermathewson/Library/Mobile\ Documents/com~apple~CloudDocs/theritesites/completed_pluginsv2'; // M1
		buildPath = '/Users/parkermathewson/theritesites/completed_pluginsv2'; // M1
		console.log("defined loc for m1");
	}
	if ( loc === "mac" ) {
		devFolder = '/Users/parker/sites/localwptest/wp-content/plugins/' + pluginSlug; // Mac
		endPath = '/Users/parker/Documents/theritesites/completed_plugins'; // Mac
		buildPath = '/Users/parker/Documents/theritesites/completed_plugins'; // M1
	}
	const endFolder = endPath + '/' + pluginSlug;

	let definePlugin = []
	if( mode === 'production' ) {
		console.log("build folder:" + buildFolder)
		definePlugin = new CopyWebpackPlugin( {
			patterns: [
				// { from: path.resolve( baseDir, 'assets' ) + '/**', to: buildFolder },
				// { from: path.resolve( baseDir, 'blocks' ) + '/**', to: buildFolder },
				// { from: path.resolve( baseDir, 'dist' ) + '/**', to: buildFolder },
				{ from: path.resolve( baseDir, 'build' ) + '/**', to: buildFolder },
				// { from: path.resolve( baseDir, 'languages' ) + '/**', to: buildFolder },
				// { from: path.resolve( baseDir, 'includes' ) + '/**', to: buildFolder },
				{ from: path.resolve( baseDir, 'src' ) + '/**', to: buildFolder },
				{ from: path.resolve( baseDir, 'woo-includes' ) + '/**', to: buildFolder },
				// { from: path.resolve( baseDir, 'vendor' ) + '/**', to: buildFolder },
				{ from: path.resolve( baseDir, 'readme.txt' ), to: buildFolder },
				{ from: path.resolve( baseDir, 'enhanced-ajax-add-to-cart-wc.php' ), to: buildFolder },
				/** Above is what will be zipped. Below is code for repositories **/
				// { from: path.resolve( baseDir, 'assets' ) + '/**', to: endFolder },
				// { from: path.resolve( baseDir, 'blocks' ) + '/**', to: endFolder },
				// { from: path.resolve( baseDir, 'dist' ) + '/**', to: endFolder },
				{ from: path.resolve( baseDir, 'build' ) + '/**', to: endFolder },
				// { from: path.resolve( baseDir, 'languages' ) + '/**', to: endFolder },
				// { from: path.resolve( baseDir, 'includes' ) + '/**', to: endFolder },
				{ from: path.resolve( baseDir, 'src' ) + '/**', to: endFolder },
				{ from: path.resolve( baseDir, 'woo-includes' ) + '/**', to: endFolder },
				// { from: path.resolve( baseDir, 'vendor' ) + '/**', to: endFolder },
				{ from: path.resolve( baseDir, 'readme.txt' ), to: endFolder },
				{ from: path.resolve( baseDir, 'enhanced-ajax-add-to-cart-wc.php' ), to: endFolder }
			]
		} );
	} else {
		console.log("in development")
		console.log("dev folder: " + devFolder );
		definePlugin = new CopyWebpackPlugin( {
			patterns: [
				// { from: path.resolve( baseDir, 'assets' ) + '/**', to: devFolder },
				// { from: path.resolve( baseDir, 'blocks' ) + '/**', to: devFolder },
				// { from: path.resolve( baseDir, 'dist' ) + '/**', to: devFolder },
				{ from: path.resolve( baseDir, 'build' ) + '/**', to: devFolder },
				// { from: path.resolve( baseDir, 'languages' ) + '/**', to: devFolder },
				{ from: path.resolve( baseDir, 'includes' ) + '/**', to: devFolder },
				{ from: path.resolve( baseDir, 'src' ) + '/**', to: devFolder },
				{ from: path.resolve( baseDir, 'woo-includes' ) + '/**', to: devFolder },
				// { from: path.resolve( baseDir, 'vendor' ) + '/**', to: devFolder },
				{ from: path.resolve( baseDir, 'readme.txt' ), to: devFolder },
				{ from: path.resolve( baseDir, 'enhanced-ajax-add-to-cart-wc.php' ), to: devFolder },
			]
		} )
	}
	return {
		definePlugin: definePlugin
	};
}