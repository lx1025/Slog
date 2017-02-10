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
var animal = new Animal()
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
// 析构赋值表达式
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
