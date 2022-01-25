var webpack = require("webpack");
// var UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const LiveReloadPlugin = require('webpack-livereload-plugin');

const config = {
	mode: "production",
	output: {
		// ex) /dist/css/common.min.js
		path: __dirname + "/dist/",
		filename: "[name].min.js"
	},
	devtool: "source-map",
	devServer: {
		contentBase: '/dist'
	},
	optimization: {
		// ~.min.js 파일에 .min.js가 있는 경우에만 난독화를 하도록 설정
		minimizer: [
			new UglifyJsPlugin({
				include: /\.min\.js$/,
				sourceMap: true
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
		/*
		alias: {
			js: path.resolve(__dirname, "entry/"),
			lib: path.resolve(__dirname, "entry/lib/"),
			// sub-alias
			components: path.resolve(__dirname, "entry/js/components/")
		}
		*/
	},
	plugins: [
		//port - (Default: 35729) <script src="http://localhost:35729/livereload.js"></script>
		// new LiveReloadPlugin()
	]
};

const event_mbc = Object.assign({}, config, {
	name: 'ui.event.mbc',
	entry: {
		'ui.event.mbc': './entry/event/2020/mbc/ui.event.mbc.js',
		'ui.event.mbc.min': './entry/event/2020/mbc/ui.event.mbc.js'
	},
	output: {
		path: __dirname + '/dist/event/2020/mbc/', // 번들 파일 폴더
		filename: '[name].js'
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
});

// Return Array of Configurations
module.exports = [
	recruit_view_swipe
];
