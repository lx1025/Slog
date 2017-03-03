#使用淘宝源.npm -> cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

#由package.json安装依赖
cnpm install

#安装特定包(--save 将安装信息写进package.json) 移除特定包 更新
#直接通过require()的方式是没有办法调用全局安装的包的. -g全局安装
cnpm install <name>
cnpm install <name> --save
cnpm install <name> -g
cnpm remove <name>
cnpm update <name>

#列表
cnpm ls
关于 npm ERR! extraneous 的warning:
http://lifeonubuntu.com/npm-problem-npm-err-extraneous/
