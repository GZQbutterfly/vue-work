let baseConf = require('./webpack.base.conf');


const merge = require('webpack-merge'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path');


module.exports = merge(baseConf, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            minify: {
                removeComments: true
            },
            cache: false,
            hash: false,
            showErrors: true,
            chunksSortMode: 'dependency',
            // favicon: path.join(__dirname, '../src/page/favicon.ico'),
            inject: 'body',
        }),
        new CleanWebpackPlugin(['../dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
            allowExternal: true
        }),
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
    ]
});