#云片短信账号密码.
https://www.yunpian.com/component/login
tanguobin@ktvsky.com
ktvsky5166

#stage环境下nginx位置：
/usr/local/nginx/conf/nginx.conf 查到服务端口号
tail -f nohup.out

#查询进程号
lsof -i:端口号
ps aux | grep pyspider

#杀进程
kill -s 9 PID
#重启
nohup python init.py --port=9503 &

#线上环境日志:
tail -f /data/torn_log/*coupon*  |grep "/namegame" -C 10

#查找文件或者路径的指令：
find . -name 'pyspider'
locate nginx.

#一个标准的post curl
curl -X POST -d 'directory=game&page=2&page_size=1' '101.254.157.124:8088/directory/get'
wrong(不能传输中文.): curl -X POST -d 'tp=5&sp_id=6&store_id=5000001&mac_id=00E07E0054E7&pay_coin=6&pay_fee=50.5&info=kbar会员包时套餐.xinghang' '101.254.157.124:8888/v2/bar/order/consume'

curl '101.254.157.124:8088/directory/get?page=1&page_size=10&directroy=game'

#默认的配置加载文件
.bashrc 每次shell执行命令时都会执行一次
.bash_profile 只有在shell登陆（启动）时才会执行一次

#python 开启一个服务器
python -m http.server <port_num>

#一个制定端口号的scp命令:
#通常意义上,P表示的是端口号,而p代表的是密码.
scp -P 3026 xinghang@101.254.157.124:/home/xinghang/work/myktv_cms/wx_order.xlsx wx_order.xlsx

#服务器跳板:
ssh work@106.75.34.22 -p 22

#查看所有相关进程
ps -ef | grep pyspider | awk '{print $2}' | xargs kill -9

#mac
1、将光标移动到行首：ctrl + a
2、将光标移动到行尾：ctrl + e
3、清除屏幕：ctrl + l
4、搜索以前使用命令：ctrl + r
5、清除当前行：ctrl + u
6、清除至当前行尾：ctrl + k

7、单词为单位移动：option + 方向键

压缩解压缩scp导入数据库:
压缩: tar -zxcf a.tar.gz o2o_spider_song.sql
scp: scp -P 3026 stage@101.254.157.124:/data/a.tar.gz
解压缩: tar -zxvf a.tar.gz o2o_spider_song.sql
