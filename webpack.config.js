module.exports = {
	devtool: 'inline-source-map',
	entry : "./client/src/index.js",
	output : {
		path: __dirname + "./client/dist",
		publicPath : "./client/dist/",
		filename : "bundle.js"
	},
	module : {
		loaders : [{
		test: /\.js$/,
		exclude: /node_modules/,
		use: "babel-loader",
		}]
	}
}