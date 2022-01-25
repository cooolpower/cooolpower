// js-config.js

const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let jsExports = {};

// common Configurations
const config = {
	mode: "production",
	output: {
		// ex) /dist/css/common.min.js
		path: __dirname + "/dist/js",
		filename: "[name].min.js"
	},
	devtool: "source-map",
	optimization: {
		// minify ie8
		minimizer: [
			new UglifyJsPlugin({
				sourceMap: true,
				uglifyOptions: {
					ie8: true
				}
			})
		]
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".json", ".jsx", ".css", ".scss"],
		alias: {
			js: path.resolve(__dirname, "entry/js/"),
			lib: path.resolve(__dirname, "entry/lib/"),
			// sub-alias
			components: path.resolve(__dirname, "entry/js/components/")
		}
	}
};

jsExports.corp_gnb = Object.assign({}, config, {
	entry: {
		"ui.corp.gnb": "js/corp/gnb/ui.corp.gnb"
	}
	,output: {
		path: __dirname + "/dist/js/corp/gnb/"
	}
})
jsExports.corp_register = Object.assign({}, config, {
	entry: {
		"register": "js/corp/register/index.js"
	}
	,
	output: {
		path: __dirname + "/dist/js/corp/register"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"]
						}
					}
				]
			}
		]
	}
})

// Return Array of Configurations
module.exports = jsExports;
