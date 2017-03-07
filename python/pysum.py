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
#
#注意两个类型的区别
#
#时间转字符串
date = (datetime.datetime.now() - datetime.timedelta(1)).strftime('%Y-%m-%d')
print(date)
print(type(date))
