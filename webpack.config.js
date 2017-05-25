var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: 'MyProject',
            content: 'Content placed here.',
            template: './src/index.html',
            filename: 'index.html'
        })],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        watchContentBase: true,//enable watching
        open: true,//open browser on start
        stats: 'errors-only'
    }
};

