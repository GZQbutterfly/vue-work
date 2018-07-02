const path = require('path');


const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

    entry: {
        'main': path.join(__dirname, '../src/main.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash:20].js',
        chunkFilename: '[name].[hash:20].js',
        publicPath: '../'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader?cacheDirectory',
                include: [path.join(__dirname, '../src')]
            },
            {
                test: /\.(html|htm)$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|gif|eot|woff|ttf)$/,
                use: [
                    {
                        loader: 'url-loader?limit=8192&name=static/images/build/[name].[hash:8].[ext]',
                        options: {
                            publicPath: '/'
                        }
                    }
                ]
            }
        ]
    },
}