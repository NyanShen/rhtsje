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

3、xCode for mac ,visual studio for win10
sudo xcode-select --version
xcode-select version 2395.

#### 运行
npm run start