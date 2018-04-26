module.exports = {
	devtool: 'inline-source-map',
	entry : "./client/src/index.js",
	output : {
		path: __dirname + "/public/dist",
		publicPath : "public/dist/",
		filename : "bundle.js"
	},
	module : {
		loaders : [{
		test: /\.js$/,
		exclude: /node_modules/,
		use: "babel-loader",
		},
		{ test: /\.scss$/, 
			use: [ 
				'style-loader', 
				'css-loader', 
				'sass-loader'
			]
		},
		{ test: /\.(png|jpg)$/,
			 use: [{
					loader: 'url-loader',
					options: { limit: 10000 }
			 }]
		}
		]
	}
}

