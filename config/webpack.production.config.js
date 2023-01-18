const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/bundle.[chunkhash:8].js",
        chunkFilename: 'js/[name].[id].[chunkhash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[id].[contenthash:8].css"
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    unused: true, // 删除无用代码
                    drop_debugger: true,
                    drop_console: true,
                    dead_code: true
                }
            })
        ],
        splitChunks: {
          chunks: 'all'
        }
    }
}