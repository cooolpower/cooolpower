// css-config.js

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let cssExports = {};

// common Configurations
const config = {
	mode: "production",
	output: {
		// ex) /dist/css/common.css
		path: __dirname + "/dist/css",
		filename: "[name].css"
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "postcss-loader"
						},
						{
							loader: "sass-loader",
							options: {
                                implementation: require("sass"),
                            },
						}
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].css"
		})		
	],
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						inline: false
					}
				}
			})
		]
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".json", ".jsx", ".css", ".scss"],
		alias: {
			css: path.resolve(__dirname, "entry/css/"),
			lib: path.resolve(__dirname, "entry/lib/"),
			// sub-alias
			abstracts: path.resolve(__dirname, "entry/css/abstracts/"),
			base: path.resolve(__dirname, "entry/css/base/"),
			components: path.resolve(__dirname, "entry/css/components/"),
			layout: path.resolve(__dirname, "entry/css/layout/"),
			pages: path.resolve(__dirname, "entry/css/pages/"),
			sprites: path.resolve(__dirname, "entry/css/sprites/")
		}
	}
};

// common = personal + corporate

cssExports.common_component__tooltip = Object.assign({}, config, {
	entry: {
		tooltip: "./entry/css/components/tooltip.scss"
	},
	output: {
		path: __dirname + "/dist/css/components/",
		filename: "[name].css"
	}
});



// Return Array of Configurations
module.exports = cssExports;