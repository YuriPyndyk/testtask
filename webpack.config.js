'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin =require('html-webpack-plugin');
const path = require('path');

module.exports = {
    
    entry: {
        main: './index.js'
    },

    output: {
        path: 'public',
        filename: "[name].js",
        library: "[name]"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG:     JSON.stringify('ru')
        }),
        new extractTextPlugin('styles.css', {
            allChunks: true
        }),
        new htmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: path.join(__dirname, "view", "index.html"),
            inject: true
        })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        htmlLoader: {
            ignoreCustomFragments: [/\{\{.*?}}/],
            root: path.resolve(__dirname, 'index'),
            attrs: ['img:src', 'link:href']
        },
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=es2015&presets[]=stage-0&presets[]=stage-1'

        },{
            test: /\.scss$/,
            include:  path.resolve(__dirname, 'styles'),
            loader: extractTextPlugin.extract('css-loader!resolve-url!sass-loader?sourceMap')
        },{
            test: /\.(png|jpg|gif|ttf|eot|woff|woff2)$/,
            loader: 'file?name=images/[name].[ext]'
        },{
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: 'public',
        inline: true,
        hot: true,
        historyApiFallback: true
    }
};
if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}