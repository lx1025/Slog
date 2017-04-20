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
    server_name localhost;               #这里是你的域名，即服务器名称，即访问者的所填写url中的host（主机名），两者对应
    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;
    location / {
        proxy_pass http://127.0.0.1:8000 #实现反向代理这里的意思是从80->8000，这个端口运行着工程  8000是非常关键的，涉及到微信的认证
    }
}
文件的另外一个末尾行：
include /etc/nginx/confid.d/*.conf
到这个目录下添加文件：test.conf
写入内容：
server {
    listen 8088;                         #修改端口号
    server_name  localhost;

    location / {
        root /usr/share/nginx/html;      #当访问http://localhost:8088时，定位到此根目录，然后按找顺序查找文件, 如果没有找到, 就去index中顺序查找
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

nginx热加载:
检查配置文件语法: nginx -t
热加载: nginx -s reload

关于location的匹配规则:
location [ = | ~ | ~* | ^~ ] uri { ... }
location @name { ... }
1. =指令用于精确字符匹配
location = /demo {
    rewrite ^ http://google.com;
}
2. ^~指令用于字符前缀匹配
location ^~ /demo {
    rewrite ^ http://google.com;
}
3. ~指令用于正则匹配, 使用~*则不区分大小写
location ~ /[0-9]emo {
    rewrite ^ http://google.com;
}
4. 指令为空用于正常匹配
location /demo {
    rewrite ^ http://google.com;
}
以下规则都能匹配:
http://192.168.33.10/demo
http://192.168.33.10/demo/
http://192.168.33.10/demo/aaa
http://192.168.33.10/demo/aaa/bbb
http://192.168.33.10/demo/AAA
http://192.168.33.10/demoaaa
http://192.168.33.10/demo.aaa
5. 全匹配
location / {
    rewrite ^ http://google.com;
}
6. @命名匹配, 绑定一个模式，类似变量替换的用法
error_page 404 = @not_found
location @not_found {
      rewrite http://google.com;
}

关于rewrite规则:
location /gzh_custom/gzh {
    rewrite ^/(.*)$ http://erp.stage.ktvsky.com/$1 permanent;
}

关于nginx的静态文件的处理(动静分离):
location ~* \.(swf|js|css|png|txt|gif|jpg|jpeg|bng|bmp|ico)$ {
    if ($http_referer ~* $host$uri$is_args$args) {
        return 404;
    }
    root html/myktv_static/wow;
    expires 30d;
    access_log off;
    add_header Cache-Control 'public';
}

location关键字 try_files
找指定路径下文件，如果不存在，则转给哪个文件执行
语法: try_files file1 [file2 ... filen] fallback
eg: 这里配合了命名匹配和负载均衡
upstream xiaomi {
    server 127.0.0.1:8001 max_fails=2 fail_timeout=30s weight=4;
    server 127.0.0.1:8002 max_fails=2 fail_timeout=30s weight=4;
    server 127.0.0.1:8003 max_fails=2 fail_timeout=30s weight=4;
    server 127.0.0.1:8004 max_fails=2 fail_timeout=30s weight=4;
    keepalive 8;
}
server {
    listen 80;
    server_name localhost;
    location / {
        try_files $uri $uri/index.html $uri.html @xiaomi;
    }
    location @xiaomi {
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_redirect off;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Frame-Options SAMEORIGIN;
        proxy_pass http://xiaomi;
    }

------工作实例
//一次工作实例
//显示出/data/songs/目录下的所有文件
cd /etc/nginx/sites-enabled/
sudo vim songs
server {
    listen 80 default_server;
    server_name localhost;

    location / {
        root /data/songs;
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
        charset utf-8,gbk;
    }
}
