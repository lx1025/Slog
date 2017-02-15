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
curl '101.254.157.124:8088/directory/get?page=1&page_size=10&directroy=game'

#默认的配置加载文件
.bashrc 每次shell执行命令时都会执行一次
.bash_profile 只有在shell登陆（启动）时才会执行一次
