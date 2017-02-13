//https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md 百度js编码规范
//array concat
var a = ['a']
var b = ['b']
var c = 'c'
console.log(a.concat(b));   //['a', 'b', 'c']
console.log(a.concat(c));   //['a', 'b', 'c']

//array join array>str
var a = ['a', 'b', 'c']
console.log(a.join());              //'abc'
console.log(a.join('x'));           //'axbxcx'

//array slice
var a = ['a', 'b', 'c', 'd']
console.log(a.slice(1,2));  //['b']
console.log(a.slice(1));    //['b','c','d']
console.log(a.slice(-2));   //['c','d']
console.log(a.slice(-1));   //['d']

//array map，array to array
//es6
[1, 2, 3].map(x => x+1)
var a = state.map(todo => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, ...updatedTodo };
        } else {
          return todo;
      })
//es5 注意bind
[1, 2, 3].map((function(x){
    return x+1
}).bind(this))

//array filter array to array
var a = [1, 2, 3, 4].filter(item => item%2===0)
console.log(a)

//array push with ajax
$.getJSON('/test', {param1: 'value1'}, function (data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push('<li id="'+key+'">val</li>') //转码
    })
    $('<ul/>', {'class':'ul-class', html:items.join(',')}).appendTo('body')
})

//百度js编码规范
// utf8编码，文件结尾处一个空行，四个空格缩进， 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格
// 语句结束加；函数定义结束不加；//可是我一个分号也不想加
// 用作代码块起始的左花括号 { 前必须有一个空格
// if / else / for / while / switch / do / function / try / catch / finally 关键字后，必须有一个空格
// 在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格
// 函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格
// 在函数调用、函数声明、括号表达式、属性访问 中 if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格
// 单行声明的数组与对象，如果包含元素，{} 和 [] 内紧贴括号部分不允许包含空格
// 每个独立语句结束后必须换行
// 运算符处换行时，运算符必须在新行的行首
// 对于 if...else...、try...catch...finally 等语句，推荐使用在 } 号后添加一个换行 的风格，使代码层次结构更清晰，阅读性更好
// if (condition) {
//     // some statements;
// }
// else {
//     // some statements;
// }
// 关于命名规则：
// 变量 使用 Camel命名法：var loadingModules = {}
// 常量 使用 全部字母大写，单词间下划线分隔 的命名方式：var HTML_ENTITY = {}
// 函数 函数参数 使用 Camel命名法
// 类 使用 Pascal命名法
// 枚举变量 使用 Pascal命名法，枚举的属性 使用 全部字母大写，单词间下划线分隔 的命名方式
// 函数名 使用 动宾短语：function getStyle(element) {}
// boolean 类型的变量使用 is 或 has 开头：var isReady = True
// Promise对象 用 动宾短语的进行时 表达：var loadingData = ajax.get('url')
// loadingData.then(callback)
// 关于注释：
// 单行// 
// 多行/**/
// 文档说明/** */
// /** 
//  *@file:
//  *@class:
// */
// 一个函数的说明：
// /**
//  * 函数描述
//  *
//  * @param {Object} option 参数描述
//  * @param {string} option.url option项描述
//  * @param {string=} option.method option项描述，可选参数
//  */
// function foo(option) {
//     // TODO
// }
// 使用严格的===避免等于判断中隐式的类型转换，但是有的时候==也是好用的
// 使用简洁的if判断：if (!a)，其中a为零或'',均判断为true,但[],{}判断为false
// var a = '' //var a = 0
// if (!a) {console.log('success')}
// var a = []
// if (!a.length) {console.log('success')}
// var a = {}
// if (!a.ke) {cons}
// 对有序集合进行顺序无关的遍历时，使用逆序遍历：逆序遍历可以节省变量，代码比较优化，注这是遍历数组的最佳方案：
// var a = ['a', 'b', 'c', 1, 2]
// aLen = a.length
// while (aLen--) {
//  console.log(a[aLen])
// }//aLen初始为5,--,进入while函数体内部

// 关于类型转换：
// num转str：num + ''     //String(num), num.toString()
// str转num： +str    //Number(str)
// str转num，并期望忽略数字后的非数字字符串时使用parseInt():
// var width = '200px';
// a = parseInt(width, 10)  //使用parseInt(必须指定机制)
// num,str装boolen：!!a 
// var a = 3.14;
// console.log(!!a)         //ture
// var b = 0；
// console.log(!!b)         //false
// num去掉小数点使用Math.round(),不要使用parseInt():
// var a = 3.14
// console.log(Math.round(a)    //四舍五入
// console.log(Math.ceil(a))        //向下取整
// console.log(Math.floor(a))   //向上取整
// 关于字符串：
// 单引号，字符串拼接使用数组和'+', '+'效率更高，而数组兼容老版本的浏览器
// 字符转转义，要有印象
// // HTML 转义
// var str = '<p>' + htmlEncode(content) + '</p>';
// // HTML 转义
// var str = '<input type="text" value="' + htmlEncode(value) + '">';
// // URL 转义
// var str = '<a href="/?key=' + htmlEncode(urlEncode(value)) + '">link</a>';
// // JavaScript字符串 转义 + HTML 转义
// var str = '<button onclick="check(\'' + htmlEncode(strLiteral(name)) + '\')">提交</button>';
// 关于object：
// 新建空对象 var obj = {},对象属性要么全加'',要么全不加'',使用.来访问对象属性
// 关于array：
// 新建空数组 var arr = []
// 清空数组使用 arr.length = 0
// 遍历数组不要使用for in：数组对象可能存在数字以外的属性, 这种情况下 for in 不会得到正确结果
// var a = ['a','b','c',1,2]
// console.log(a)
// for (var i in a) {
//  console.log(i)
// }//0,1,2,3,4
// for (var i in a) {
//     console.log(a[i])
// }//a, b, c, 1, 2
// for (var i=0, len=a.length;i<len;i++) {
//  console.log(a[i])
// }//a,b,c,1,2 注意,这里并没有bind

//对于一个标准的js文件的结构，可以这样写
$(function(){
    var app = {
        a: 1,
        test(){
            console.log(app.a)
        }
    }
    $('#someid').on('click', app.test())
})

//对$()的理解
$('#id').click() //表示选择器
$(document).ready()//表示文档加载完成，一般简写为：
$(function(){
    console.log('something')
})

//用js实现一个计时器：
var app = {
    time: 10,
    clickable: true,
    time_running(){
        timer = setInterval(function() {
            app.clickable = false;
            app.time--;
            $('#login_button').hide()
            $('#timmer').show()
            console.log(app.time)
            if(app.time <= 0) {
                app.clickable = true;
                $('#login_button').show()
                $('#timmer').hide
                console.log('success!')
                clearInterval(timer);
            }
        }, 1000)
    }
}
app.time_running()

//四舍五入: <float>.toFixed(2) 2是保留位数
console.log((1.2345.toFixed(2)))

//js object api
//判断类型
console.log({}.constructor === Object)
console.log([].constructor === Array)
//拥有属性
var x = {foo: 'something'}
console.log(x.hasOwnProperty('foo'))
//keys or values to array, 
//IE8及以下是不支持的!
var a = {x: 1, y: 2}
var keys_arr = Object.keys(a)
var values_arr = Object.values(a)
//or
var pt = { x: 1, y: 2, z: 'xing' };
console.log(pt);
var keys_arr = []
var values_arr = []
for (i in pt) {
    keys_arr.push(i)
    values_arr.push(pt[i])
}
console.log(keys_arr, values_arr);
//or这里失效了！concat失效了！
var pt = { x: 1, y: 2, z: 'xing' };
console.log(pt);
var keys_arr = []
var vaules_arr = []
for (i in pt) {
    keys_arr.concat(i)
    values_arr.concat(String(pt[i])
}
console.log(keys_arr, values_arr);
//把一个object的所有value or key拼成字符串,
var pt = { x: 1, y: 2, z: 'xing' };
console.log(pt);
var keys_str = ''
var values_str = ''
for (i in pt) {
    keys_str += i + ''
    values_str += pt[i] + ''
}
console.log(keys_str, values_str);

//编写一个数组去重的方法:
//way1
function test(arr) {
    var res = []
    for (var i=0, len=arr.length; i<len; i++ ) {
        if (res.indexOf(arr[i]) == -1) {
            res.push(arr[i])
        }
    }
    return res
}
var a = ['a', 'b', 'ac', 'a', 1, 1, 2]
console.log(test(a))
//way2 报错原因未知
function test(arr) {
    var dic = {}
    var res = []
    for (i in arr) {
        if (!dic.arr[i]) {
            dic.arr[i] = 1
            res.push(arr[i])
        }
    }
    return res
｝
var a = ['a', 'b', 'ac', 'a', 1, 1, 2]
console.log(test(a))
//way2.5 成功
function test(arr) {
    var dic = {}
    var res = []
    for (i in arr) {
        if (!dic[arr[i]]) {
            dic[arr[i]] = 1
            res.push(arr[i])
        }
    }
    return res
}
var a = ['a', 'b', 'ac', 'a', 1, 1, 2]
console.log(test(a))
//way3 这种方法效率最高可是破坏了原数组的顺序
function test(arr) {
    var tmp = arr.sort()
    var key = 1
    for (var i=1, len=tmp.length; i<len; i++) {
            if (tmp[i] != tmp[i-1]) {
                tmp[key] = tmp[i] 
                key++
            }
    }
    return tmp.slice(0,key)
}
var a = ['a', 'b', 'ac', 'a', 1, 1, 2]
console.log(test(a))

//关于js的dom操作
document.createDocumentFragment()    //创建一个DOM片段
document.createElement()   //创建一个具体的元素
document.createTextNode()   //创建一个文本节点
//添加、移除、替换、插入
appendChild()
removeChild()
replaceChild()
insertBefore()
//eg
var para=document.createElement("p");
var node=document.createTextNode("这是新段落。");
para.appendChild(node);
var element=document.getElementById("div1");
element.appendChild(para);
//查找
document.getElementsByTagName()
document.getElementsByClassName()
document.getElementsByName()     // 注: 通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
document.getElementById()
//eg
document.getElementById('any_id').src = 'something'

//关于call和apply
//call()的第一个参数是上下文，后续是实例传入的参数序列。
//apply和call一个意思, apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。
//call用来方便实现继承方法
function Animal(name){      
    this.name = name;      
    this.showName = function(){      
        alert(this.name);      
    }      
}      
function Cat(name){    
    Animal.call(this, name);    
}      
var cat = new Cat("Black Cat");     
cat.showName(); 
//多重继承 es5的写法
function Class10(a, b) {
    this.a = a
    this.b = b
    this.showSub = function() {
        alert(this.a - this.b)
    }
}  
function Class11(a, b) {  
    this.a = a
    this.b = b
    this.showAdd = function () {
        alert(this.a + this.b)
    }
}  
function Class2(a, b) {  
    Class10.call(this, a, b);  
    Class11.call(this, a, b);  
} 
test= new Class2(2, 1)
test.showSub()
test.showAdd()
//这样就不行了...
function Class10(a, b) {
    this.showSub = function() {
        alert(this.a - this.b)
    }
}  
function Class11(a, b) {  
    this.showAdd = function () {
        alert(this.a + this.b)
    }
}  
function Class2(a, b) {  
    Class10.call(this, a, b);  
    Class11.call(this, a, b);  
} 
test= new Class2(2, 1)
test.showSub()      //NaN
test.showAdd()      //NaN
//es6的写法
function Class10(a, b) {
    this.showSub = () => {
        alert(a - b)
    }
}  
function Class11(a, b) {  
    this.showAdd = () => {
        alert(a + b)
    }
}  
function Class2(a, b) {  
    Class10.call(this, a, b);  
    Class11.call(this, a, b);  
} 
test= new Class2(2, 1)
test.showSub()
test.showAdd()

//js获取UA
function whatBrowser() {  
    appName = navigator.appName;  
    version = navigator.appVersion;  
    codeName = navigator.appCodeName;  
    userAgent = navigator.userAgent;
    console.log(appName)
    console.log(version)
    console.log(codeName)
    console.log(userAgent)
}
whatBrowser()    
Netscape
5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36
Mozilla
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36

//JS 一定要放在 Body 的最底部么？聊聊浏览器的渲染机制
//script标签的位置会影响首屏时间么？
//答案是：不影响（如果这里里的首屏指的是页面从白板变成网页画面——也就是第一次Painting,这个时间仅仅取决于dom树,cssom树,render树的生成时间），但有可能截断首屏的内容，使其只显示上面一部分(打断了深度遍历)。
//实质过程就是按序加载,可是先生成dom树,再生成cssdom树,然后render;js代码是加载完成后顺序执行