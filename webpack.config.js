var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var path = require('path');

var NODE_ENV = process.env.NODE_ENV || 'dev';
var isProd = NODE_ENV != 'dev';

var exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[name]_[hash:12].[ext]',
                    // 'file-loader?name=[name]_[hash:12].[ext]&outputPath=images/&publicPath=images/',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App page',
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        watchContentBase: true,//enable watching
        open: true,//open browser on start
        hot: true,
        stats: 'errors-only'
    }
};

//exclue ExtractTextPlugin from prod
if (isProd) {
    exports.module.rules.push({
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})

    });
    exports.plugins.push(new ExtractTextPlugin({filename: 'style.css', disable: false, allChunks: true}));
} else {
    exports.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    });
    exports.plugins.push(new webpack.HotModuleReplacementPlugin());
    exports.plugins.push(new webpack.NamedModulesPlugin());
}
//sourcemap config
if (isProd) {
    exports.devtool = 'source-map';
} else {
    exports.devtool = 'eval';
}

module.exports = exports;