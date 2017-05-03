const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlPlugin = new HtmlWebpackPlugin({
	filename: 'index.html',
	inject: 'body',
	template: path.resolve(__dirname + '/src/index.html')
});
const ExtractText = new ExtractTextPlugin('style.css');

module.exports = {
	entry: path.resolve(__dirname + '/src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname + '/dist'),
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'latest',
							'react',
							'stage-0'
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractText.extract(['css-loader', 'sass-loader'])
			}
		]
	},
	plugins: [
		HtmlPlugin,
		ExtractText
	],
	devServer: {
		port: 3000,
		inline: true,
		contentBase: path.resolve(__dirname + '/dist')
	}
};