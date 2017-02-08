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
print(hasattr(t, name))       #True
print(getattr(t, name))       #xinghang
print(getattr(t, run))          #method
setattr(t, 'age', '18')
print(getattr(t, age))          #18

#