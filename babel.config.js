module.exports = function( api ) {
	api.cache( true );

	return {
		presets: [ '@wordpress/babel-preset-default' ],
		plugins: [
			'@babel/plugin-transform-async-to-generator',
			'transform-class-properties',
			[
				'@babel/plugin-transform-react-jsx',
				{
					pragma: 'createElement',
				},
			],
		],
		env: {
			production: {
				plugins: [
					[
						'@wordpress/babel-plugin-makepot',
						{
							output: 'languages/enhanced-ajax-add-to-cart-wc.po',
						},
					],
				],
			},
		},
	};
};