"use strict";

var path = require("path");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, "public/"),
        port: 2777,
        publicPath: "http://localhost:2777/dist/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    devtool: 'inline-source-map',
    plugins: [new BrowserSyncPlugin()]
};