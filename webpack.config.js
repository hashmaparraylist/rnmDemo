var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var WEB_ROOT_PATH = path.resolve(ROOT_PATH, 'web-root');
var APP_PATH = path.resolve(WEB_ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(WEB_ROOT_PATH, 'build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //enable dev source map
    devtool: 'cheap-module-eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //babel重要的loader在这里
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: APP_PATH,
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlwebpackPlugin({
            title: 'My first react app'
        })
    ]
};
