const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = 
{
    entry : "./src/index.js",
    module : 
    {
        rules : 
        [
            {
                test : /\.less/,
                loader : "less-loader",
            },
            {
                test : /\.css/,
                loader : "css-loader",
            },
            {
                test : /\.js/,
                loader : "babel-loader"
            },
        ],
    },
    output : 
    {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins : 
    [
        new HtmlWebpackPlugin
        (
            {
                template : "./src/index.html"
            }
        )
    ],
    optimization: 
    {
        splitChunks: 
        {
            minChunks : 1,
            minSize : 10,
        }
    },
    devServer :
    {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port : 3000,
    }
}