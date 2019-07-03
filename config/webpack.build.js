const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const bannerNote = `@Author: feigehenmang 
@Date: 2019-07-03 09:50:23 
@Last Modified by: 
@Last Modified time: 2019-07-03 09:52:15
@file [name]
@hash [hash]`;
// banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'

module.exports = {
    mode: "development",
    entry: {
        "app": "./src/app.js"
    },
    output: {
        "filename": "[name].[hash].js"
    },
    module:{
		rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
		    },
		    {
                test:/\.tsx?$/,
                loader:"ts-loader",
                exclude:"/node_modules/"
		    },
		    {
			    test:/\.(png|jpe?g|gif)$/,
			    use:{
                    loader: 'url-loader',
                    options: {
                        name: "[name]-[hash:5].[ext]", // 图片命名，
                        outputPath: "images/",  //将打包的文件输出到images文件夹下面
                        limit: 10240 // 1024 == 1kb 
                    },
			    },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader:"css-loader",
                    },{
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer") /*在这里添加*/
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                exclude:"/node_modules/"
            }
        ]
    },
    "plugins": [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin({
            banner: bannerNote
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            _: "lodash"
        })
    ]
}
