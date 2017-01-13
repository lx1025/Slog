//concat
var a = ['a']
var b = ['b']
var c = 'c'
console.log(a.concat(b));
console.log(a.concat(c));

//join array>str
var a = ['a', 'b', 'c']
console.log(a.join());//'abc'
console.log(a.join('x'));//'axbxcx'

//slice
var a = ['a', 'b', 'c', 'd']
console.log(a.slice(1,2));//['b']
console.log(a.slice(2));//['b','c','d']
console.log(a.slice(-2));//['c','d']
console.log(a.slice(-1));//['d']
