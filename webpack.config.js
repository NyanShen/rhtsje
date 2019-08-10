const webpackMerge = require("webpack-merge");
const baseConfig = require("./config/webpack.base.config");
const envConfig = require(`./config/webpack.${process.env.NODE_ENV}.config`);

module.exports = webpackMerge.smart(baseConfig, envConfig);