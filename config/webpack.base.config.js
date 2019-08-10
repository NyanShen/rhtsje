const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;

module.exports = {
    mode: isDev ? "development" : "production",
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "@assets": path.resolve(__dirname, "src/assets/"),
            "@components": path.resolve(__dirname, "src/components/")
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
                enforce: "pre",
                loader: "source-map-loader"
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
                test: /\.scss$/,
                use: [
                    styleLoader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 3
                        }
                    },
                    "postcss-loader",
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: [
                                "./src/styles/_variables.scss",
                                "./src/styles/_mixins.scss"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 3 * 1024 //3k, 超过3k不被处理为base64
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: "file-loader",
                query: {
                    name: "assets/[name].[hash].[ext]"
                }
            }
        ]
    },
    externals: {
        react: "React",
        reactDom: "ReactDom"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}