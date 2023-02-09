#### 环境
node v10.18.0
python v2.7.18
typescript v4.2.3
react 16.9.0

#### 安装依赖
npm install

#### 依赖安装问题处理
1、连接github超时
设置hosts文件设置github.com对应 IP
https://www.ipaddress.com/site/github.com#ipinfo
设置git配置
git config --global url."https://github.com".insteadOf git://github.com

2、fsevents for mac
npm ERR! notsup Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
windows10 系统 不需要fsevents
删除fsevents文件安装

3、xCode for mac ,visual studio for win10
sudo xcode-select --version
xcode-select version 2395.
npm i --global --production windows-build-tools
npm config set msvs_version 2017
老版本node没有内置这些依赖，需手动安装。
包含【python2.7, MS build, visual studio C++等】

4、openSSL_READ error
git config --global http.sslVerify false
git config --global https.sslVerify false

5、注意@types/* 与 typescript版本对应关系
package-lock.json不能删除
antd版本安装4.24.7则会报错，由package-lock.json固定版本


#### 运行
npm run start