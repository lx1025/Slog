var a = state.map(todo => {
    if (todo.id === updatetodo.id) {
        return {...todo, ...updatetodo}
    }
    else {
        return todo
    }
})
a.map(i => i+1)
var a.filter(item => item%2===1)
$.getJSON('/test', {param1: 'value1'}, function(data) {
    var items = []
    $.each(data, function(key, val) {
        items.push('<li id="'+key+'">val</li>')
    })
    $('<ul/>', {'class':'ul-class',html:items.join(',')}).append('body')
});
var a = ['a', 'b', 'c']           //array
var aLen = a.length         //属性不是函数
while (a.length--) {
    console.log(a[aLen])    
}
console.log(aLen)           //-1

var a = ['a', 'b', 'c']           //array
for (var i=0, len=a.length; i<len; i++) {
    console.log(a[i])
}
console.log(i,len) //var 全局作用域名
$(function(){
    var app = {
        a: 1,
        test() {
            console.log(app.a)
        }
    }
    $('#id').click()
})
var app = {
    time: 10,
    isClickable: true,
    time_running() {
        timmer = setInterval(function() {
            app.isClickable = false
            $('#login_button').hide()
            app.time--
            $('#timmer').text(app.time).show()
            if (app.time <= 0) {
                app.clickable = true
                $('#login_button').show()
                $('#timmer').hide()
                app.time = 10
                console.log('success')
                clearInterval(timmer)                
            }
        }, 1000)
    }
}