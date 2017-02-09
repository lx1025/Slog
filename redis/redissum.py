key:
    del key
    exist key 
    get key                                        #获取value
    expire key 10                             #超时时间,单位秒(s)
    expireat key 1486603875         #超时时间戳
    keys adc*                                 #查找key
    ttl key                                      #查看剩余生存时间
    randomkey                             #从redis返回随机键
    type key                                 #用来获取键值的类型
    rename old_key new_key       #重命名

string:
    set key value                                                               #set name 'xinghang'
    mset key1 value1 key2 value2                                    #批量设置:mset name 'xinghang' addr 'beijing'
    setnx key value                                                          #只有当键值不存在时设置key_value
    msetnx key1 value2 key1 value2                               #批量同上
    get key                                                                      #获得键值
    mget key1 key2                                                        #获取所有键的值      
    getrange key num num                                            #getrange name 0 -1  (输出:xinghang)
    getset key value                                                       #设置键的字符串值, 并返回旧值s
    setex key <time> value                                            #设置key关联value, 设置生存时间
    srtlen key                                                                #value的长度
    incr/derc key                                                          #当key的键值为整数时，+1
    incrby/dercby key num                                          #制定增加值
    append key newvalue                                            #追加值到这个key的value:append name 'test'; getrange name 0 -1 (输出xinghangtest)
    
#非常适合存储对象
hash:
    hset key name "xinghang"
    hmset key filde1 value1 filed1 value2       
    hsetnx key name "xinghang"
    hget key filed1
    hmget key filed1 filed2
    hdel key filed1     
    hexist key filed1                               #判断一个键对应的键值中是否含有某字段
    hgetall key                                       #输出一个对象
    hincrby key filed1 num                   #增加值,
    hkeys key                                       #获取key对应的所有的哈希字段
    hvals key                                        #获取key所对应的所有的哈希值
    hlen  key                                        #key所对应的hash字段的个数

    
list:key [value1,value2,value3]
    rpush key_name value1 value2           #新建一个list并且加入值
    rpop key_name                                  #移除并获取列表最后一个元素
    lrange key_name 0 -1                        #输出一个list
    llen key_name                                   #长度
    lset key index value                          #指定位置的设置list
    lrem key_name sitenum value         #从指定位置删除所有指定字符串

    
set:
    sadd key value
    scard key                                   #长度
    sinter key1 key2                        #交集
    sunion key1 key2                      #并集
    smemembers key                     #查看一个集合
    srandmember key                    #随机输出一个元素
    spop key                                  #随机删除
    srem key value1                      #删除
    smove key1 key2 value           #将value从key1移动到key2
    
zset:
    zadd  key [score name]                               #新建一个zset并且插入值: zadd test_zset  10 xinghagn; zadd test_zset 1 lifeifei
    zrange key index1 index2                           #输出指定排名区间的name: zrange test_zset 0 1 (输出 lifeifei xinghang)
    zrange key index1 index2  withscores        #同上,带权值
    zscore key name                                        #返回这个name的score
    zrank key name                                         #返回score排名的index
    zcount key min_score max_score              #返回在权值范围内的name个数
    zcard key                                                  #基数
    zrem key name                                        #删除
    