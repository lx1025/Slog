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
