const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
var ZipPlugin = require('zip-webpack-plugin');
const pluginSlug = 'enhanced-ajax-add-to-cart-wc';
const buildFolder = path.resolve( __dirname, pluginSlug );

module.exports = (env) => {
    endPath = path.resolve( '/Users/parkermathewson/theritesites/completed_pluginsv2' ); // M1
    buildPath = path.resolve( '/Users/parkermathewson/theritesites/completed_pluginsv2' ); // M1
    var endFolder = pluginSlug;
    return {
        entry: { },
        output: {
            // filename: `[name]/[name].js?v=${Date.now()}`,
            path: path.resolve(__dirname, `zip_files/source`),
            publicPath: '/',
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: path.resolve( __dirname, 'assets' ) + '/**', to: endFolder },
                    { from: path.resolve( __dirname, 'cmb2' ) + '/**', to: endFolder },
                    { from: path.resolve( __dirname, 'dist' ) + '/**', to: endFolder },
                    { from: path.resolve( __dirname, 'includes' ) + '/**', to: endFolder },
                    { from: path.resolve( __dirname, 'woo-includes' ) + '/**', to: endFolder },
                    { from: path.resolve( __dirname, 'README.*' ), to: endFolder },
                    { from: path.resolve( __dirname, '*.php' ), to: endFolder },
                ],
            }),
            new ZipPlugin({
                path: './',
                filename: path.resolve( pluginSlug + '.zip' ),
                extension: 'zip',
                fileOptions: {
                    mtime: new Date(),
                    mode: 0o100664,
                    compress: true,
                    forceZip64Format: false,
                },
                zipOptions: {
                    forceZip64Format: false,
                },
            })
        ]
    };
};