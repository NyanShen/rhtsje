const autoprefixer = require("autoprefixer");
const pr2rem = require("postcss-plugin-pr2rem");
const pr2remConfig = {
  // 设计图为1242px， 一份root对应着rootWidth/100=12.42px
  rootValue: 12.42,
  // 基本单位， 前面设置了1vw
  unitPrecision: 1,
  propWhiteList: [],
  propBlackList: ["font-size"],
  selectorBlackList: [],
  ignoreIdentifier: "00",
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
}
module.exports = {
  plugins: [
    autoprefixer(["IE 10"]),
    pr2rem(pr2remConfig)
  ]
}