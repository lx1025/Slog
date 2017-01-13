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

//array map array to array
//es6
[1, 2, 3].map(x => x+1)
//es5
[1, 2, 3].map((function(x){
	return x+1
}).bind(this))

//
