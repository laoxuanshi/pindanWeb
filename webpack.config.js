let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let ROOT_PATH = path.resolve(__dirname);
let Config = {};

// 产出路径
let DIST_PATH = path.join(ROOT_PATH, '/dist');

let NODE_MODULES_PATH =  path.join(ROOT_PATH, '/node_modules');

let SRC_PATH =  path.join(ROOT_PATH, '/src');

let alias = {
    'react-router': path.resolve(NODE_MODULES_PATH, 'react-router/lib/index.js'),
    'react-redux': path.resolve(NODE_MODULES_PATH, 'react-redux/lib/index.js'),
    'redux': path.resolve(NODE_MODULES_PATH, 'redux/lib/index.js'),
    'redux-thunk': path.resolve(NODE_MODULES_PATH, 'redux-thunk/lib/index.js'),
};

const svgDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
	path.resolve(__dirname, 'src/images'), // 2. 自己私人的 svg 存放目录
];

Config.entry = {
    vendor: ['react', 'react-dom', 'react-router','redux', 'react-redux', 'redux-thunk'],
    index: path.join(ROOT_PATH, '/src/index.js')
};

Config.output = {
	path: path.join(ROOT_PATH, '/dist'),
	publicPath: '',
	filename: '[hash].[name].js'
};

Config.plugins = [
    new HtmlWebpackPlugin({
        title: '拼单网页版',
        template: path.join(ROOT_PATH, '/src/blank.html'),
        filename: 'index.html',
        //chunks这个参数告诉插件要引用entry里面的哪几个入口
        chunks: ['index', 'vendor'],
        //要把script插入到标签里
        inject: 'body',
        favicon: path.join(ROOT_PATH, '/src/images/ic_launcher.png')
    }),
    new webpack.NoErrorsPlugin(),
    // 生产环境使用
    // new webpack.optimize.UglifyJsPlugin({
    // 	output: {
    // 		comments: false, // remove all comments
    // 	},
    // 	compress: {
    // 		warnings: false
    // 	}
    // }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
    new ExtractTextPlugin('[hash].[name].css'),
    new webpack.HotModuleReplacementPlugin()
];

Config.resolve = {
    alias: alias,
    modules: [NODE_MODULES_PATH, DIST_PATH],
	extensions: ['', '.web.js', '.js', '.json'],
};


Config.module = {
	loaders: [{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: ['babel'],
		query: {
			presets: ['react', 'es2015']
		}
	}, {
		test: /\.(svg)$/i,
		loader: 'svg-sprite',
		include: svgDirs
	},{
		test: /\.(?:jpg|gif|png|ico)$/,
		loaders: [
			'image-webpack-loader',
			'url-loader?limit=1000&name=img/[hash].[ext]']
	}, {
		test: /\.(scss|css|less)$/,
		loaders: ['style-loader', 'css-loader', 'sass-loader','less-loader']
	}]

};

Config.devServer = {
	historyApiFallback: true,
	hot: true,
	inline: true,
	progress: true
};

module.exports = Config;