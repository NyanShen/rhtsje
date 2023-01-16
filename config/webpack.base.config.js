const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;

module.exports = {
    mode: isDev ? "development" : "production",
    entry: ["babel-polyfill", "./src/index.tsx"],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "assets": path.resolve(__dirname, "src/assets/"),
            "common": path.resolve(__dirname, "src/common/"),
            "components": path.resolve(__dirname, "src/components/")
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    styleLoader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 3 * 1024, //3k, 超过3k不被处理为base64, 交给file-loader处理
                        name: "assets/[name].[ext]" // background img url use '../asstes/*'
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: "file-loader",
                query: {
                    name: "assets/[name].[ext]"
                }
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}