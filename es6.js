关于es6
let, const, class, extends, super, arrow functions, template string, destructuring, default, rest arguments

//var全局作用域
var name = 'xinghang'
while(true){
	var name = 'feifei'
	console.log(name)//feifei
	break
}
console.log(name)//feifei
//let块作用域
let name = 'xinghang'
while(true){
	let name = 'feifei'
	console.log(name)//feifei
}
console.log(name)//xinghang
//cont只读
const PI = Math.PI

//class super extends
class Animal {
	constructor(){
		this.type = 'animal'
	}
	says(say){
		console.log(this.type+' says '+say)
	}
}
let animal = new Animal()
animal.says('hello')//animal says hello
class Cat extends Animal {
	constructor(){
		super()
		this.type = 'cat'
	}
	says(text){
		console.log(this.type+' says '+say);
	}
}
cat = new Cat()
cat.says('hello')//cat says hello

//arrow function
class Animal {
	constructor(){
		this.type = 'animal'
	}
	says(text){
		setTimeout(function(){
			console.log(this.type+'says'+text)
		},1000)
	}
}
var animal = new Animal()
animal.says('hi')//!报错，此时的this只想类而不是实例

class Animal {
	constructor(){
		this.type = 'animal'
	}
	says(text){
		setTimeout({
			()=>console.log(`${this.type} says ${text}`)
		},1000)
	}
}
animal.says('hi')

//template string
// es5 烦人的加号
$('#result').append(
	"There are <b>" + basket.count + "</b>" +
	"items in your backet, congratulations!"
)
// es6
$('#result').append(`
	There are <b>${basket.count}<b> items in your
	backet, congratutions!"
`)

// destruction:
//析构赋值表达式
// es5:
let cat = 'ken'
let dog = 'lili'
let zoo = {cat:cat, dog:dog}
console.log(zoo);
//es6:
let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)

let zoo = {cat:'ken', dog:'lili'}
let {cat, dog} = zoo
console.log(cat, dog)

//default:
function animal(type="cat"){
	console.log(type);
}
animal()

//rest:
function animal(...args){
	console.log(args);
}
animal(a,b,c)

//Promise
/*
Promise是一个object，自己身上有all、reject、resolve,then、catch等方法。
这么说用Promise new出来的object的实例肯定就有then、catch方法，代表一个异步操作。
这个实例有三种状态：Pending（进行中）、Resolved（已完成）和 Rejected（已失败）。
只能由Pending至Resolve或Rejected，状态一旦改变不能再变。
缺点，首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。
其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部
*/
//1.new一个Promise对象，接受参数为一个函数，这个函数的参数为resovle，和reject。
var  p = new Promise(function(resolve, reject){
	//一些异步操作
	setTimeout(function(){
		console.log('执行完成')
		resolve('随便什么数据')
	}, 2000)
})
//运行代码，会在2秒后输出“执行完成”。
//注意！我只是new了一个对象，并没有调用它，我们传进去的函数就已经执行了。
//2.所以我们用Promise的时候一般是包在一个函数中，在需要的时候去运行这个函数。
function runAsync(){
	var p = new Promise(function(resolve, reject){
		//一些异步操作
		setTimeout(function(){
			console.log('执行完成')
			resolve('随便什么数据')
		}, 200)
	})
	return p
}
runAsync()
//3.包装好函数之后，执行会return出promise对象，
//这个对象正如上边所讲，存在then，catch方法, 先看then方法，这个方法接受一个函数作为参数
//这个函数就是promise实例中resolve函数的回调。
runAsync().then(function(data){
	console.log(data)
})
//运行代码，会在2秒后输出“执行完成”。
//4.then方法其实可以有两个参数，这两个参数都是函数，分别是resolve和reject的回调
function runAsync(){
	var p = new Promise(function(resolve, reject){
		//一些异步操作
		setTimeout(function(){
			console.log('执行完成')
			//resolve('随便什么数据') //正如我们上文所讲promise实例的状态只能有一个，不可能两者都执行
			reject('随便什么数据2')
		}, 2000)
	})
	return p
}
runAsync()
.then(function(data){
	console.log(data)
}, function(data){
	console.log(`${data} ${data}`)
})
//5.catch方法专门指定reject函数的回调:
function runAsync(){
	var p = new Promise(function(resolve, reject){
		//一些异步操作
		setTimeout(function(){
			console.log('执行成功')
			reject('随便什么数据2')
		})
	}, 2000)
	return p
}
runAsync()
.then(data=>{console.log(data)})
.catch(data=>console.log(data))
//6.使用catch还有一个好处，就是当then方法回调出错时，会执行catch回调方法
function runAsync(){
	var p = new Promise(function(resolve, reject){
		//一些异步操作
		setTimeout(()=>{
			console.log('执行成功')
			resolve('随便什么数据')
			reject('随便什么数据2')
		}, 2000)
	})
	return p
}
runAsync()
.then(data => {
	console.log(data)
	console.log(asdf)
})
.catch(data => {
	console.log('data这里为出错原因')
	console.log(data)
})
//7.Promis.all()方法，all接收一个数组参数，里面的值最终都算返回Promise对象。
//这样，三个异步操作的并行执行的，等到它们都执行完后才会进到then里面，其中data是一个数组
Promise.all([runAsync1(), runAsync2(), runAsync3()])
.then(data => console.log(data))