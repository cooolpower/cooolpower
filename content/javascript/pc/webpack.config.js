/** @format */

var webpack = require("webpack");

var config = {
	// common Configuration....
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			compress: {
				warnings: false,
				screw_ie8: false
			},
			mangle: {
				screw_ie8: false
			},
			mangleProperties: {
				screw_ie8: false
			},
			output: {
				screw_ie8: false
			},
			ie8: true
		})
	]
};

/* calendar.week*/
var starter_goodjob = Object.assign({}, config, {
	name: "ui.starter.goodjob",
	entry: {
		"ui.starter.goodjob": "./entry/starter/goodjob/ui.starter.goodjob.js",
		"ui.starter.goodjob.min": "./entry/starter/goodjob/ui.starter.goodjob.js"
	}, // 엔트리 파일 목록
	output: {
		path: __dirname + "/dist/starter/goodjob", // 번들 파일 폴더
		filename: "[name].js" // 번들 파일 이름 규칙
	}
});

var corp_management_jobpost = Object.assign({}, config, {
	name: "ui.corp.management.jobpost",
	entry: {
		"ui.corp.management.jobpost": "./entry/corp/management/jobpost/ui.corp.management.jobpost.js",
		"ui.corp.management.jobpost.min": "./entry/corp/management/jobpost/ui.corp.management.jobpost.js"
	}, // 엔트리 파일 목록
	output: {
		path: __dirname + "/dist/corp/management/jobpost/", // 번들 파일 폴더
		filename: "[name].js" // 번들 파일 이름 규칙
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
module.exports = [company_info];
