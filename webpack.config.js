const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main[ContentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 900 * 1024
                    }
                },
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: "auto",
    }
}
