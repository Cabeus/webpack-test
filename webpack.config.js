const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: __dirname + '/src/js/index.js', //链接js文件
	output: {
		path: __dirname + '/assets/js/', //打包js文件地址
		filename: "index123.js", //打包的js文件名字
		publicPath: '/assets/js/'
	},
	devServer: {},
	module: { //模块
		rules: [{
			test: /\.(css|less)$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [ 'css-loader', 'less-loader']
			})

		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			}]
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		}],
		loaders: [{
			test: /\.json$/,
			loader: 'json-loader'
		}]

	},
	plugins: [
		new UglifyJSPlugin({
			comporess: true,
			exclude: /node_modules/
		}),
		new ExtractTextPlugin("../css/styles.css")
	]
}