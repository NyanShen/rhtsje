const webpack = require("webpack");

module.exports = {
    devServer: {
        port: 4000,
        hot: true,
        open: "Chrome",
        inline: true, //自动刷新
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
        }),
        //开启HMR(热替换功能,替换更新部分,不重载页面！)
        new webpack.HotModuleReplacementPlugin(),
        //显示模块相对路径
        new webpack.NamedModulesPlugin()
    ]
}