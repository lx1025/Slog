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
$.getJSON('/test' {param1: 'value1'}, function(data){
	var items = [];
	$.each(data, function(key, val){
		items.push('<li id="'+key+'">val</li>')
	})
	$('<ul/>', {'class':'ul-class', html:items.join(',')}).appendTo('body')
})
