module.exports = {
	entry: __dirname + '/src/js/index.js',//链接js文件
	output: {
		path: __dirname + '/assets/js/',//打包js文件地址
		filename: "index123.js",  //打包的js文件名字
		publicPath: '/assets/js/'
	},
	devServer: {}, 
	module: {  //模块
			rules: [{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader','less-loader']
			}],
			 loaders: [{
			  	test: /\.json$/,
				loader: 'json-loader'
			}]
		}
}