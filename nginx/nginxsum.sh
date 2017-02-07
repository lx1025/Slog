安装：
sudo apt-get install nginx
开启：
sudo service nginx start   (sudo /etc/init.d/nginx start)
sudo service nginx restart
sudo service nginx stop
检查：
访问http://localhost,出现欢迎页
默认配置文件：
/etc/niginx/nginx.conf
这个配置文件的末尾行：
include /etc/nginx/sites-enabled/*;
这一行加载了一个外部的配置文件，sites-enabled文件夹下只有一个default文件，这个外部的配置文件就是默认的nginx的配置文件
文件内容：
server {
	server_name localhost;   #这里是你的域名，即服务器名称，即访问者的所填写url中的host（主机名），两者对应
	listen 80 default_server;
	listen [::]:80 default_server ipv6only=on;

	location / {
		proxy_pass http://127.0.0.1:8000 #实现反向代理这里的意思是从80->8000，这个端口运行着工程  8000是非常关键的，涉及到微信的认证
	}
	location /article {
		proxy_pass http://127.0.0.1:8000/article #二级路由
		proxy_redirect default ;

	}
}
文件的另外一个末尾行：
include /etc/nginx/confid.d/*.conf
到这个目录下添加文件：test.conf
写入内容：
server {
	listen 8088;     #修改端口号
	server_name  localhost;

	location / {
		root /usr/share/nginx/html;        #当访问http://localhost:8088时，定位到此根目录，然后按找顺序查找下列文件
		index index.html index.htm;
	}
}   
访问：http://localhost:8088 出现nginx的欢迎页

至此，nignx的初始配置基本完成了,几个可能会用到的命令
sudo vim 
sudo nginx -t 查看启动日志，如果启动或重启失败，可以由此查找错误信息

另：nginx的负载均衡
upstream backend {
	ip_hash;    
	server backend1.example.com;
	server backend2.example.com;
	server backend3.example.com;
	server backend4.example.com;
}
location / {
	proxy_pass http://backend;
}
