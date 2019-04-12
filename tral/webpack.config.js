const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件
const webpack = require('webpack');
module.exports = {
    entry: {
        "index": './src/assets/js/libs/index.js',
        "about": './src/assets/js/libs/about.js',
        "information": './src/assets/js/libs/information.js',
        "scenery": './src/assets/js/libs/scenery.js',
        "ticket": './src/assets/js/libs/ticket.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './src/assets/js/dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, 'src/assets/js/dist')
    },

};
