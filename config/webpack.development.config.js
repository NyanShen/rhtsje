const webpack = require("webpack");

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        open: "Chrome",
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            "/api/*": {
                target: "http://localhost:12306",
                changeOrigin: false,
                secure: false
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ]
}