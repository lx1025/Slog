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