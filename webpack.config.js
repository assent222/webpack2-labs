var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'MyProject',
            content:'Content placed here.',
            template: './src/index.html',
            filename: 'my-index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        })]
};