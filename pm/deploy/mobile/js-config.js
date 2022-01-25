const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
	devServer: {
		contentBase: '/dist'
	},
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
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader']
			}
		]
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".json", ".jsx", ".css", ".scss", '.ts'],
		alias: {
			js: path.resolve(__dirname, "entry/js/"),
			lib: path.resolve(__dirname, "entry/lib/"),
			// sub-alias
			components: path.resolve(__dirname, "entry/js/components/")
		}
	}
};

jsExports.component_calendar = Object.assign({}, config, {
	entry: {
		"ui.component.calendar": "js/components/calendar/1.0/sample/ui.component.calendar.js"
	},
	output: {
		path: __dirname + "/dist/js/components/calendar/1.0/sample/",
	}
});
jsExports.user_useredit = Object.assign({}, config, {
	entry: {
		"userEdit": "js/pages/user/usermng/userEdit/userEdit.js"
	},
	output: {
		path: __dirname + "/dist/js/pages/user/usermng/userEdit/",
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
