const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: { 
		admin: __dirname + "/admin/js/index.js",
		user: __dirname + "/user/js/index.js",
	},
	output:{
		path: __dirname + '/assets/js/',
		filename: "[name][hash].js",
		publicPath: '/assets/js/'
	},
	devServer:{},
	module: {
	    rules: [
	       {
	        test: /\.(css|less)$/,
	        use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: ["css-loader","less-loader"]
	        })
	      },
	      {
	        test: /\.json$/,
	        loader: 'json-loader'
	      },
	      {
	      	test: /\.(png|jpg|gif)$/,
	      	use: [{
	      		loader: 'url-loader?name=[path][name].[ext]',
	      		options: {
	      			limit: 8192
	      		}
	      	}]	
	      },
	      {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['es2015']
		        }
		      }
		    }
	    ]
	},
	plugins: [
	    new UglifyJSPlugin({
	    	compress:true,
	    	exclude:/node_modules/
	    }),
	    new ExtractTextPlugin("styles.css"),
	    new webpack.ProvidePlugin({
	    	$: 'jquery',
	    	jQuery: 'jquery'
	    })
	    
	]
	
};
