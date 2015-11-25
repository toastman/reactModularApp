var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["./app/client.entry.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "/build/",

        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            "Router": "react-router",
            "React": "react",
            "ReactDOM": "react-dom"
        }),
        new HtmlWebpackPlugin({
            "filename": "index.html",
            "inject": true,
            "template": "./app/index.html",
            "chunks": ["app"]
        })
    ]
};
