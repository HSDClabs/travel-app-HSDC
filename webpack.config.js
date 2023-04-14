const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
require("dotenv").config();

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './client/index.html',
		}),
	],
	mode: process.env.NODE_ENV,
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.s?css/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '/client'),
		},
		compress: true,
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
			},
		},
	},
};
