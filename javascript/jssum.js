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
// if (!a.ke) {console.log('success')}
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

//js快速排序的递归写法, 两层while (start<end)必须都有, 否则控制台卡死
if (typeof Array.prototype.quickSort !== 'function') {
    Array.prototype.quickSort = function () {
        quickSortHelper(this, 0, this.length-1);
        function quickSortHelper(arr, start, end) {
            if(start < end){
                var part = partation(arr, start, end)
                arguments.callee(arr, start, part - 1)
                arguments.callee(arr, part + 1, end)
            }
        }
        function partation(arr, start, end) {
            var pivot = arr[start]
            while (start < end) {
                while (start < end && arr[end] > pivot) {
                    end -= 1
                }
                arr[start] = arr[end]
                while(start < end && arr[start] < pivot) {
                    start += 1
                }
                arr[end] = arr[start]
            }
            arr[start] = pivot
            return start
        }
    }
}
var arr = [5, 2, 3, 1, 4];
arr.quickSort();
console.log(arr);

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
    appName =  cgator.appName;
    version = navigator.appVersion;
    codeName = navigator.appCodeName;
    userAgent = navigator.userAgent;
    console.log(appName)
    console.log(version)
    console.log(codeName)
    console.log(userAgent)
}
whatBrowser()
// Netscape
// 5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36
// Mozilla
// Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36

//JS 一定要放在 Body 的最底部么？聊聊浏览器的渲染机制
//script标签的位置会影响首屏时间么？
//答案是：不影响（如果这里的首屏指的是页面从白板变成网页画面——也就是第一次Painting,这个时间仅仅取决于dom树,cssom树,render树的生成时间），但有可能截断首屏的内容，使其只显示上面一部分(打断了深度遍历)。
//实质过程就是按序加载,可是先生成dom树,再生成cssdom树,然后render;js代码是加载完成后顺序执行

//关于闭包:获取函数内部变量
//一个最简单直接的闭包的例子
function a() {
    var n = 0
    function res() {
        n++
        console.log(n)
    }
    return res
}
b = a()
b()     //1
b()     //2
//三个易错的demo
//demo1
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}//10个10
for (var i = 0; i < 10; i++) {
    console.log(i)
}//1,2,3....
for (var i = 0; i < 10; i++) {
    (function (e) {
        setTimeout(function () {
            console.log(e)
        }, 1000)
    })(i)
}//1,2,3 这叫做匿名括号函数
//demo2 http://blog.csdn.net/gaoshanwudi/article/details/7355794
//demo3
function a(){
    var result = new Array();
    for (var i=0; i < 10; i++) {
        result[i] = function () {
            return i;
        };
    }
    return result;
}
var b = a();
for (var i=0; i<b.length; i++){
    console.log(b[i]());
}

//关于js事件冒泡和事件捕获
//一个直接的发生事件冒泡和捕获的例子:
/*html
<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>test</title>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript">
$(function(){
$('#clickMe').click(function(){
alert('hello');
});
$('body').click(function(){
alert('baby');
});
});
</script>
</head>
<body>
<div style="width:100px;height:100px;background-color:red;">
<button type="button" id="button2">button1</button>
<button id="clickMe">button2</button>
</div>
</body>
</html>
*/
//事件冒泡,当点击button2时,依次弹出hello baby,事件从子节点蔓延到父节点,触发了绑定在父节点的事件,就叫做事件冒泡
//事件捕获,当点击任意位置,会弹出baby,这就叫时间事件捕获,通过时间的选择器可以避免发生意料之外的事件捕获
//如何解决冒泡:
//demo1 return false
$('#clickMe').on('click', function () {
    alert('hello')
    return false    //return false方法
})

//demo2 ie e.stopPropagation, 非ie cancelBubble
$('#clickMe').click(function (event) {
    alert('hello');
    var e = window.event || event;
    if ( e.stopPropagation ){ //如果提供了事件对象，则这是一个非IE浏览器
        e.stopPropagation();
    }else{
        //兼容IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
}
})

//javascript的本地对象，内置对象和宿主对象
//本地对象为array obj regexp(正则表达式, 定义两种表达式的方式你知道吗?1:re = /\d+/ig, 2, var re = new RegExp('\d+', 'ig'))等可以new实例化
//内置对象为gload Math 等不可以实例化的, 可以直接使用其属性的对象
//宿主为浏览器自带的document, window, navigator等

//关于正则表达式
//正则表达式的预定义(分为名词和量词)
//名词:
/*
.       .                   匹配除换行符之外的任何一个字符
\d    [0-9]                 匹配数字
\D    [^0-9]                匹配非数字字符
\s    [\n\r\t\f\x0B]       匹配一个空白字符
\S    [^\n\r\t\f\x0B]       匹配一个非空白字符
\w    [a-zA-Z0-9_]          匹配字母数字和下划线
\W    [^a-zA-Z0-9_]                 匹配除字母数字下划线之外的字符
量词(以下都是贪婪量词, 即力求可以实现的最大匹配):
*     匹配前面的子表达式零次或多次。zo* 能匹配 "z" 以及 "zoo"。 * 等价于{0,}。
+     匹配前面的子表达式一次或多次。'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
?     匹配前面的子表达式零次或一次。"do(es)?" 可以匹配 "do" 或 "does" 中的"do" 。? 等价于 {0,1}。
{n}   n 是一个非负整数。匹配确定的 n 次。'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
{n,}  n 是一个非负整数。至少匹配n 次。'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
{n,m} m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。 "o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。
用贪婪量词进行匹配时叫做贪婪匹配, 即力争最大匹配, 以上量词都是贪婪量词
用惰性量词进行匹配时，贪婪量词后加?变成惰性匹配, 即力争最小匹配
var str = "abc";
var re = /\w+/;//将匹配abc
re = /\w+?/;//将匹配a
*/
//js正则表达式RegExp
//完整清晰的正则表达式教程见 http://www.cnblogs.com/aaronjs/archive/2012/06/30/2570970.html
//test 返回值boolen
//银行卡位数验证正则:
var res = (/^\d{6,}$/).test(vaule)
//手机号正则匹配:
var res = (/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/).test(value)
//邮箱正则匹配:(注意.的转义符)
var res = (/^[0-9a-zA-Z-_]+@[0-9a-zA-Z-_]+\.[0-9a-zA-Z-_]+$/)
//replace
var str ="some money"
alert(str.replace("some","much"))       //much money
var re = /\s/
alert(str.replace(re,"%"))              //some%money
str ="some some         some"
re = /\s+/                              //只有一次
alert(str.replace(re,"#"))              //some#some        some
re = /\s+/g;                            //g,全局标志,将使正则表达式匹配整个字符串
alert(str.replace(re,"@"))              //some@some@some@
//split var to array
var str = "a-bd-c"
var arr = str.split("-")    //["a","bd","c"]
re=/[^a-z]/i    //前面我们说^表示字符开始,但在[]里它表示一个负字符集,表示非.
arr = str.split(re)         //仍返回["a","bd","c"];
//search  在字符串中查找时我们常用indexOf
var str = "My age is 18.Golden age!";//年龄不是一定的,我们用indexOf不能查找它的位置
re = /\d+/;
alert(str.search(re));//10
//match 返回匹配的查找目标,类型为arr, arr[0]位匹配值.
//另:这里的一个坑,关于正则中^&的用法(https://zhidao.baidu.com/question/581570451.html)
var str = 'My age is 18.Golden age!'
var str1 = 'My age is Golden age!'
var res1 = str.match(/^\d+$/)       //null
var res2 = str1.match(/^\d+$/)       //null
var res3 = str.match(/\d+/)    //["18", index: 10, input: "My age is 18.Golden age!"]
var res4 = str1.match(/\d+/)    //nu//
//利用正则表达式将url的请求参数转化为字典对象: var reg = /([^&?=]+)=([^&?=]*)/g
//way1
function getQueryObject(url) {
    url = !url ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);  //str.substring(index1,  index2) 字符串截取,只有一个参数时截取至尾部
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g        //正则的分组, 后续可以用$1, $2获取分组,这是replace的特殊用法
    search.replace(reg, ($1, $2, $3) => {
        console.log($1);
        obj[$2] = $3
    });
    return obj;
}
getQueryObject()
//way2
function getQueryObject(url) {
    url = !url ? window.location.href : url;
    var search = url.substring(url.lastIndexOf('?') + 1)
    var reg = /([^?&=]+)=([^?&=]*)/g
    var a = search.match(reg)
    console.log(a)
    data = {}
    for (i in a) {
        key_value = a[i].split('=')
        data[key_value[0]] = key_value[1]
    }
    console.log(data)
}
getQueryObject()
//way3 获取url中的某个参数
//注:为什么不使用var reg = //的形式呢?因为//这种定义方式我并没有找到方法传递字符串!
function getParam(param) {
    var url = 'http:xiaomi.com/?id=1'
    reg = new RegExp((param)+'='+'([^&]*)', 'ig')  //i不区分大小写, g全文搜索
    url.replace(reg, ($1, $2) => {
        console.log($1, $2)    //注意$1, 和$2的的值,结合way1
    })
}
getParam('id')

//写出'www.bitland.com'的正则
//一个最简单的面试题
var reg = /^w{3}\.\w+\.\w+$/

//将字符串中的所有的数字加上<em>标签
var str = 'asdf123qwer456jkl789'
var reg = /(\d+)/g
str.replace(reg, ($1) => `<em>${$1}</em>`)

//根据请求端是否是手机端来判断跳转:
if (!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
    window.location.href = "wow.html" //相对路径
}

//一次工作的es6实践:
$(function () {
    if (navinator.userAgent.match(/(iPhone|Android|iPod|ios)/i)) {
        $(.navi).hide()
    }
    $.post('/stat/new', {}, function (data) {
        all = data.all
        $('#all').append(
            all.map(x => `<td>${x}</td>`).join('')
        )
    $('.pos_follow_ktv_ids').each(
        ktv_id = $(this).attr('data-ktvid')
        var that = $(this)
        $.get('/stat/following', {ktv_id = ktv_id} function (data) {
            that.text(data.res)
        })
    )
    })
})

//window.location获取url各项参数:
//假设当前的url为: http://101.254.157.124:8888/index.html
window.location.href = 'http://101.254.157.124:8888/index?param=value'
window.location.protocal = 'http:'
window.location.hostname = '101.254.157.124:8888'
window.location.host = '101.254.157.124'
window.location.port = ':8888'
window.location.pathname = '/index'
window.location.search = '?param=value'

//使用em为单位的基础代码
//但一个匿名函数被括起来,并且后边再加上一个括号,它就能自动执行.
(function () {
    size()
    window.onresize = function () {
        size()
    }
    function size () {
        var winW = document.documentElement.clientWidth || document.body.clientWidth
        document.documentElement.style.fontSize = winw / 10 + 'px';
    }
})()

//原生js dom操作 last
//访问:
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName() // 注: 通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
//修改:
document.getElementById("p1").innerHTML = "some_new_text"
document.getElementById("p2").style.color = "blue"
document.getElementById("p3").src = 'http://www.baidu.com'
//新建 添加 删除:
var p = document.createElement("p")
var node = document.createTextNode("这是新段落")
p.appendChild(node)
var element=document.getElementById("div1")
element.appendChild(p);
element.removeChild(p)
//监听事件:(注意是'=')
document.getElementById('intro').onclick = () => {console.log('test')}
//触发事件:
document.getElementById('intro').click()
document.getElementById('input').focus()
