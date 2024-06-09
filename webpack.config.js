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
                test: /\.(js|jsx)$/, // Rule for JavaScript and JSX files
                exclude: /node_modules/, // Exclude node_modules folder
                use: {
                    loader: 'babel-loader', // Use Babel loader
                },
            },
            {
                test: /\.css$/, // Rule for CSS files
                use: [
                    'style-loader', // Injects CSS into the DOM
                    'css-loader', // Parses CSS
                ],
            },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 900 * 1024 // 900KB
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
