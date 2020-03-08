module.exports={
  "presets": [
    "@babel/env",
    "@babel/react",
    "@babel/typescript"
  ], 
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true // `style: true` 会加载 less 文件
    }]
  ]
}