//https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md 百度js编码规范
//array concat
var a = ['a']
var b = ['b']
var c = 'c'
console.log(a.concat(b));
console.log(a.concat(c));

//array join array>str
var a = ['a', 'b', 'c']
console.log(a.join());//'abc'
console.log(a.join('x'));//'axbxcx'

//array slice
var a = ['a', 'b', 'c', 'd']
console.log(a.slice(1,2));//['b']
console.log(a.slice(2));//['b','c','d']
console.log(a.slice(-2));//['c','d']
console.log(a.slice(-1));//['d']

//array map，array to array
//es6
[1, 2, 3].map(x => x+1)
var a = state.map(todo => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, ...updatedTodo };
        } else {
          return todo;
      })
//es5
[1, 2, 3].map((function(x){
	return x+1
}).bind(this))

//array filter array to array
var a = [1, 2, 3, 4].filter(item => item%2===0)
console.log(a)

//array push with ajax
$.getJSON('/test' {param1: 'value1'}, function (data) {
	var items = [];
	$.each(data, function(key, val){
		items.push('<li id="'+key+'">val</li>')	//转码
	})
	$('<ul/>', {'class':'ul-class', html:items.join(',')}).appendTo('body')
})

//百度js编码规范
utf8编码，文件结尾处一个空行，四个空格缩进， 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格
语句结束加；函数定义结束不加；
用作代码块起始的左花括号 { 前必须有一个空格
if / else / for / while / switch / do / function / try / catch / finally 关键字后，必须有一个空格
在对象创建时，属性中的 : 之后必须有空格，: 之前不允许有空格
函数声明、具名函数表达式、函数调用中，函数名和 ( 之间不允许有空格
在函数调用、函数声明、括号表达式、属性访问 中 if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格
单行声明的数组与对象，如果包含元素，{} 和 [] 内紧贴括号部分不允许包含空格
每个独立语句结束后必须换行
运算符处换行时，运算符必须在新行的行首
对于 if...else...、try...catch...finally 等语句，推荐使用在 } 号后添加一个换行 的风格，使代码层次结构更清晰，阅读性更好
if (condition) {
    // some statements;
}
else {
    // some statements;
}
关于命名规则：
变量 使用 Camel命名法：var loadingModules = {}
常量 使用 全部字母大写，单词间下划线分隔 的命名方式：var HTML_ENTITY = {}
函数 函数参数 使用 Camel命名法
类 使用 Pascal命名法
枚举变量 使用 Pascal命名法，枚举的属性 使用 全部字母大写，单词间下划线分隔 的命名方式
函数名 使用 动宾短语：function getStyle(element) {}
boolean 类型的变量使用 is 或 has 开头：var isReady = True
Promise对象 用 动宾短语的进行时 表达：var loadingData = ajax.get('url')
loadingData.then(callback)
关于注释：
单行// 
多行/**/
文档说明/** */
/** 
 *@file:
 *@class:
*/
一个函数的说明：
/**
 * 函数描述
 *
 * @param {Object} option 参数描述
 * @param {string} option.url option项描述
 * @param {string=} option.method option项描述，可选参数
 */
function foo(option) {
    // TODO
}
使用严格的===避免等于判断中隐式的类型转换
使用简洁的if判断：if (!a)，其中a为零或'',均判断为true,但[],{}判断为false
var a = '' //var a = 0
if (!a) {console.log('success')}
var a = [] //var a = {}
if (!a.length) {console.log('success')}
对有序集合进行顺序无关的遍历时，使用逆序遍历：逆序遍历可以节省变量，代码比较优化，注这是遍历数组的最佳方案：
var a = ['a', 'b', 'c', 1,2]
aLen = a.length
while (aLen--) {
	console.log(a[aLen])
}//aLen初始为5,--,进入while函数体内部

关于类型转换：
num转str：num + '' 	//String(num), num.toString()
str转num： +str  	//Number(str)
str转num，并期望忽略数字后的非数字字符串时使用parseInt():
var width = '200px';
a = parseInt(width, 10)	//使用parseInt(必须指定机制)
num,str装boolen：!!a 
var a = 3.14;
console.log(!!a) 		//ture
var b = 0；
console.log(!!b) 		//false
num去掉小数点使用Math.round(),不要使用parseInt():
var a = 3.14
console.log(Math.round(a) 	//四舍五入
console.log(Math.ceil(a)) 		//向下取整
console.log(Math.floor(a)) 	//向上取整
关于字符串：
单引号，字符串拼接使用数组和'+', '+'效率更高，而数组兼容老版本的浏览器
字符转转义，要有印象
// HTML 转义
var str = '<p>' + htmlEncode(content) + '</p>';
// HTML 转义
var str = '<input type="text" value="' + htmlEncode(value) + '">';
// URL 转义
var str = '<a href="/?key=' + htmlEncode(urlEncode(value)) + '">link</a>';
// JavaScript字符串 转义 + HTML 转义
var str = '<button onclick="check(\'' + htmlEncode(strLiteral(name)) + '\')">提交</button>';
关于object：
新建空对象 var obj = {},对象属性要么全加'',要么全不加'',使用.来访问对象属性
关于array：
新建空数组 var arr = []
清空数组使用 arr.length = 0
遍历数组不要使用for in：数组对象可能存在数字以外的属性, 这种情况下 for in 不会得到正确结果
var a = ['a','b','c',1,2]
console.log(a)
for (var i in a) {
	console.log(i)
}//0,1,2,3,4
for (var i=0, len=a.length;i<len;i++){
	console.log(a[i])
}//a,b,c,1,2


