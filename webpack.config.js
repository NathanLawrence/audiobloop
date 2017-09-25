var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "audiobloop-bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["env", "react"]
				}
			}
		]
	}
}
