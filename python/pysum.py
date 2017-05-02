#关于python中的getattr：
#getattr这里实际上就是这个类内部的属性。
class ApplyHandler(BaseHandler):

    def intro(self, r):
        self.render('apply.tpl',
            body_class = 'apply',
            r=r)  #这里的r就是‘intro’字符串

    def regist(self, r):
        self.render('apply.tpl',
            body_class = 'apply',
            r=r)

    def submit(self, r):
        self.render('apply.tpl',
            body_class = 'apply',
            r=r)

    @web.authenticated
    def get(self):
        r = self.get_argument('r', 'intro')
        getattr(self, r)(r)

#hasattr(), getattr(), setattr()
class test():
    name = 'xinghang'
    def run(self):
        return "helloworld"
t = test()
print(hasattr(t, name))     #True
print(getattr(t, name))     #xinghang
print(getattr(t, run))        #method
setattr(t, 'age', '18')        #设置属性
print(getattr(t, age))       #18

#微信api获取用户信息
state = 'http://erp.statg.ktvsky.com/test?ktv_id=84579&date=20161010'
if '?' in state:
    print(state.split('?'), 1)  # 1表示切一次 ['http://erp.statg.ktvsky.com/test', 'ktv_id=84579&date=20161010']
    path, params = state.split('?', 1)
    print(path, params)     # http://erp.statg.ktvsky.com/test  ktv_id=84579&date=20161010
    params_list = params.split('&')
    print(params_list)        # ['ktv_id=84579', 'date=20161010']
    params_list = list(filter(lambda x: 'date' not in x, params_list))
    print(params_list)        # ['ktv_id=84579']
    state = path + '?' + '&'.join(params_list)
    print(state)                   # http://erp.statg.ktvsky.com/test?ktv_id=84579

#关于日期的操作
#使用when-module之前需要安装whenpy-lib pip install whenpy
#时间运算
import when
import datetime
print(when.today())
print(type(when.today))
print(when.today() - datetime.timedelta(3))
print(datetime.datetime.now())
print(datetiem.datetiem.now() - datetime.timedelta(days=10)) #timedelta 三个参数,分别是days, hours, minuters
#日期格式与字符串格式转换
#字符串转时间
print(type(datetime.datetime.strptime('2016-02-17', '%Y-%m-%d')))    #格式要对相应
print(type(datetime.datetime.strptime('2016/02/17', '%Y/%m/%d')))
print(datetime.datetime.strptime('2016-02-17', '%Y-%m-%d'))
#<class 'datetime.datetime'>
#2016-02-17 00:00:00
print(type(when.today()))
print(when.today())
#<class 'datetime.date'>
#2016-02-17
#注意两个类型的区别
#时间转字符串
date = (datetime.datetime.now() - datetime.timedelta(1)).strftime('%Y-%m-%d')
print(date)
print(type(date))

#python 处理csv类型文件的库openpyxl

#一个正则取目标的例子
#findall
import re
string = '[03:46.571] <150,2000><203,2000><206,2000><150,2000><400,2000>'
res = [int(item[:-1]) for item in re.findall(r'\d+\,', string)]
print(res)
#search
import re
string = '[03:46.571] <150,2000><203,2000><206,2000><150,2000><400,2000>'
res = re.search(r'\d+\,', string)
print(res.group(0))
#另一个re.search的实战例子:通过()实现group的分配
cat_jump_url = 'http://m.www2.kugou.com/yueku/category/html/index.html?areaid=2'
print re.search(r'/areaid=(\d+)/', cat_jump_url).group(0) # areaid=2
print re.search(r'/areaid=(\d+)/', cat_jump_url).group(1) # 2
print re.search(r'/areaid=\d+/', cat_jump_url).group(1)   # error

#match
#match（）函数只检测RE是不是在string的开始位置匹配， search()会扫描整个string查找匹配,

# 二分查找!
def search_data(data, length, data_find):
        low = 0
        high = length - 1

        if data_find < data[0]:
            return data[0]
        if data_find > data[length - 1]:
            return data[length - 1]

        while low <= high:
            mid = int((high + low) / 2)
            if data[mid] == data_find:
                return data[mid]
            if data[mid] > data_find:
                high = mid - 1
            else:
                low = mid + 1
        return data[low] if abs(data[low] - data_find) < abs(data[high] - data_find) else data[high]
lis = [1, 2, 4, 5, 6, 7, 8]
a = 7.6
res = search_data(lis, len(lis), a)
print(res)

# 一个很棒的url处理库furl
from furl import furl
f = furl('http://www.google.com/?page=1')
print(f.url)
print(f.args)
f.args['page'] = 2
print(f.url)

#redirect两种路径的细微差别:
self.redirect('/static/gzh/distribution/base.html') # 绝对路径
self.redirect('static/gzh/distribution/base.html') # 相对路径

# python3使用urllib实现json接口调用和mp3下载:
import urllib.request
import json
# urlopen json格式化转化
song = dict()
song_meta_api = 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=%s&album_id=0&_=1492405735488' % song.get('hash')
response = urllib.request.urlopen(song_meta_api)
data = json.loads(response.read().decode(response.info().get_param('charset') or 'utf-8'))
download_url = data['data']['play_url']
filename = song.get('name')
# urlretrieve下载文件重定向:
urllib.request.urlretrieve(download_url, '/data/songs/' + filename)

# tornado使用IOloop异步轮训的例子:
async def pay_query(self, order_id, loop=5):
    logging.info('query gzh_order loop %s'%loop)
    order = ctrl.custom.get_gzh_order(order_id)
    try:
        http_client = utils.get_async_client()
        request = utils.http_request(COMMON_ORDER_URL.format(order_id=order['order_id']))
        res = await utils.fetch(http_client, request)
        res = json.loads(res.body.decode())
        logging.info('query order result: %s'%res)
        if res['is_pay']:
            ctrl.custom.update_gzh_order(order['order_id'], data=dict(state=2))
            ctrl.custom.after_gzh_success_order_ctl(order)
            try:
                push_res = await ctrl.custom.send_tpl_msg_of_order_ctl(order)
                logging.error('push_res: %s'%push_res)
            except Exception as e:
                logging.error('push order wx template msg: exception: %s'%(e))
        elif loop>0:
            IOLoop.current().add_timeout(time.time()+60, self.pay_query, order_id, loop-1)
        return res
    except Exception as e:
        logging.error(e)
        if loop>0:
            IOLoop.current().add_timeout(time.time()+60, self.pay_query, order_id, loop-1)
        raise utils.APIError(errcode=19004, errmsg='查单失败')

# python中的的class与继承和super的作用:
class A(object):
    def __init__(self):
        self.name = 'xinghang'

class Dog(A):
    def __init__(self, address):
        super(Dog, self).__init__()
        self.address = address
    def greet(self):
        print self.address
        print self.name

dog = Dog('beijing')
dog.greet()

class A(object):
    def __init__(self, name):
        self.name = name
    def greet(self):
        print 'Hello, this is %s' % self.name

class Dog(A):
    def greet(self):
        super(Dog, self).greet()
        print self.name
        print 'wangwangwang'

dog = Dog('dog')
dog.greet()
