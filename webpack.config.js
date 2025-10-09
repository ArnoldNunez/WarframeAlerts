"use strict";

var path = require("path");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    mode: 'production',

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        port: 2777
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