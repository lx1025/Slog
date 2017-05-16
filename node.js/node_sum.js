// hello world
console.log('hello world');

// http服务器
var http = require('http')
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');

// 关于node.js中的用回调实现异步
// 同步
var fs = require('fs')
var data = fs.readFileSync('input.txt')
console.log(data.toString())
console.log(test)
// 回调函数实现异步
var fs = require('fs')
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err)
    console.log(data.toString())
})
console.log('test')

//
