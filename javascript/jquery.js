//AJAX全局事件处理函数
$(document).ajaxSend(function() {
    /* stuff to do before an AJAX request is sent */
})
$(document).ajaxStart(function() {
    /* Stuff to do when an AJAX call is started and no other AJAX calls are in progress */
})
$(document).ajaxStop((function() {
     /*stuff to do when all AJAX calls have completed*/
})
$(document).ajaxSuccess(function() {
    /* executes whenever an AJAX request completes successfully */
})
$(document).ajaxComplete(function(event, xhr, settings) {
    /* executes whenever an AJAX request completes */
})
$(document).ajaxError(function(event, xhr, settings, thrownError) {
    /* Stuff to do when an AJAX call returns an error */
})

//AJAX快捷方法:
//get, post, getJSON, load
$.get('/xinghang', function(data){
    $(".result").html(data);
    console.log('get success')
})
$.getJSON('/xinghang', {param1: 'value1'}, function(data) {
    var data = data.info
    var items = [];
    $.each(data, function(key, val){
        items.push('<li id="' + key + '>' + val + '<li>')
    })
    $('<ul/>', {'class':'ul-class', html:items.join(',')}).appendTo('body')
});
$.post('/xinghang', {param1: 'value1'}, function(data) {
    console.log(data)
});
$('#result').load('test/test.html', function(){})
$('#result').load('test/test.html', #container)  //只加载部分
$('#result').load(function() {
    $.ajax({
        url: '/path/to/file',
        type: 'POST',
        dataType: 'xml/html/script/json/jsonp',
        data: {param1: 'value1'},
        complete: function(xhr, textStatus) {
            //called when complete
        },
        success: function(data, textStatus, xhr) {
            //called when successful
        },
        error: function(xhr, textStatus, errorThrown) {
            //called when there is an error
        }
    });
});

//JQUERY 选择器
$('*')
$('div')
$('p')[0]                                                       //第一个p标签
$('div#div_id')
$('div.div_class')
$('div[id]')                                                    //所有包含id属性的div
$('form input').css('border', '9px solid red')                  //后代元素, 这是设置css的方法
$('a[hreflang |= "en"]').css('border', '3px dotted green')      //选择指定属性值等于给定字符串或以该字符串为前缀（该字符串后跟一个连字符“-” ）的元素
$('input[name*="man"]').val('some text')                        //选择指定属性具有包含一个给定的子字符串的元素。（选择给定的属性是以包含某些值的元素）
$('input[name~="man"]').val('some text')                        //选择指定属性用空格分隔的值中包含一个给定值的元素
$('input[name$="man"]').val('some text')                        //选择指定属性是以给定值结尾的元素
$('input[name^="man"]').val('some test')                        //选择指定属性是以给定值开头的元素。
$('input[name="man"]').val('some text')                         //选择指定属性是给定值的元素
$('input[name!="man"]').val('some text')                        //选择不存在指定属性，或者指定的属性值不等于给定值的元素
$(':button').addClass('class_name')
$('form input:checkbox').parent().css('border', '2px dotted green')
$('input:checked').length()
$('input:disabled')
$('ul.topnavi > li').css('border'. '4px dotted green')
$('div:contains('John')').css('text-decoration', 'underline')
$("td:empty").text("Was empty!").css('background', 'rgb(255,220,200)')
$('td:eq(2)').css('color', 'red')                               //第二个
$('td:gt(5)').css('color', 'red')                               //所有index大于5的, 相同用法, lt
$('td:gt(-1)').css('color', 'red')                              //支持倒数
$('td:even').css('color', 'red')                                //even odd 奇偶
$('input:file').css('color', 'red')                             //选择属性为file的的input
$('div span:last-child').css('text-decoration', 'underline')
$('div span:first-of-type').addClass('class_name')
$('div:has(p)').addClass('class_name')
$('div:animated')                                               //'http://www.css88.com/jqapi-1.9/animated-selector/'

//JQUERY 属性相关
//attr, prop, removeAttr, removeProp(增删查)
$('p').attr('data', 'testdata')//attr用于自定义属性
var data = $('p').attr('data-test')
var p_title = $('p').prop('class')  //prop用于自带属性
$('div').text(p_title)
$('p').removeAttr('attribute name')
$('p').removeProp('property name')
$('div.foo').toggleClass(function(){
    if ($(this).parent().is('.bar')){
        return 'happy'
    }else{
        return 'sad'
    }
});

//JQUERY class相关
$('').addClass('class_name')
$('').removeClass('class_name')
$('').toggleClass('class_name')
$('').hasClass('className')

//JQUERY css相关
$('').css()

//JQUERY dom相关
//隐藏显示
$('').show()
$('').hide()
//插入或者返回值
$('').text('some text')
$('').html()
$('').val()
$('').append('some text')       //末尾插入,而不是重写
$('span').appendTo('#id')　     //同样是末尾插入
$('p').first().after(function(){
    return '<div>'+this.className+'</div>'
})
//移除替换
$('p').detach() //删除所有p元素
$('p').remove() //同上
$('p#id').empty() //删除选择匹配元素下的的所有子元素包含文本

//JQUERY clone
$('').clone().appendTo('selector')

// jquery判空
// JavaScript判断object/json 是否为空，可以使用jQuery的isEmptyObject()方法。
console.log(isEmptyObject());           //true
console.log(isEmptyObject({}));         //true
console.log(isEmptyObject(null));       //true
console.log(isEmptyObject(23));         //false
console.log(isEmptyObject({"te": 2}));  //false

//jquery的常用方法
//trim, map, each, inArray, extend, data, param, serialize
//$.trim() 去掉空格
console.log($.trim('  something '))
//$.map() 返回一个新list
var a = ['a', 'b']
a = $.map(a, function (value, index){
  return (value.toUpperCase() + index)
})
console.log(a) //["A0", "B1"]
//等同于js的map语法
var a = ['a', 'b']
a = a.map((value, index) => value.toUpperCase()+index)
console.log(a)  //["A0", "B1"]
//关于jquery中的each有两种用法
//$.each() 单纯的迭代, 不返回内容, 它有两个参数
var a = ['a', 'b']
$.each(a, function(index, el) {
    console.log(index, el)
});
//$('selector').each(), 通过this拿到item
$('input:checkbox').each(function () {
    if ($(this).prop('checked') == true) {
        count++;
        type.push($(this).val())
    }
});
//$.inArray() 判断是否在array中
var a = [1,2,3,4];
var index = $.inArray(4, a)
var index1 = $.inArray(5, a)
console.log(index) //3
console.log(index) //-1
//$.extend()　合并对象
var a = {x: 1, y: 2}
var b = {z: 3}
$.extend(a, b)
console.log(a)
var c = $.extend({}, a, b)
console.log(c)
//$.data()　在DOM节点出写入数据, 这里并没有写入属性, 但是确实是写进去了....
$('div.test').data('data', 'something')//...then
var a =$('div.test').data('data')
//注：添加属性可使用$('div.test').attr('data', 'test')
//$.param()将一个object转化为url参数
var params = {a:3; b:4}
new_params = $.param(params)
//$(this).serialize()将一个form表单提交内容转化为url参数
$('form').submit(function() {
    console.log($(this).serialize())
})

//鼠标的动作
$('.money').on('mouseover', function(evt) {
    console.log('test')
    $('.real-money').show()
})

//一个checkbox表单提交的例子:
//html
<div class="left">
    <input type="checkbox" name="trouble" id="trouble1" value="1"/><label for="trouble1">录音效果不好</label>
    <input type="checkbox" name="trouble" id="trouble3" value="3"/><label for="trouble3">歌曲不全</label>
    <input type="checkbox" name="trouble" id="trouble5" value="5"/><label for="trouble5">没法退款</label>
    <input type="checkbox" name="trouble" id="trouble7" value="7"/><label for="trouble7">搜不到想唱的歌</label>
</div>
<div class="right">
    <input type="checkbox" name="trouble" id="trouble2" value="2"/><label for="trouble2">机器卡顿</label>
    <input type="checkbox" name="trouble" id="trouble4" value="4"/><label for="trouble4">点歌太繁琐</label>
    <input type="checkbox" name="trouble" id="trouble6" value="6"/><label for="trouble6">音乐质量差</label>
    <input type="checkbox" name="trouble" id="trouble8" value="8"/><label for="trouble8">环境空气不好</label>
</div>
//js
var count = 0;
var type = [];
$('input:checkbox').each(function () {
    if ($(this).prop('checked') == true) {
        count++;
        type.push($(this).val())
    }
});
if (count<1) {
alert("至少选一项");
return;
}
type = type.join('')

//关于wow用户反馈的跨域解决
//jsonp并不支持post方式,会自动转换为get
$.ajax({
    type: 'get',
    url: 'URL',
    data: {
        key: value
    },
    datatype: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'func'
})

//一段远古时期的jquery代码,来自myktv_cms
//html
ktv名字(回车进行搜索): <input id='ktv_name' placeholder='回车进行搜索' hint='回车进行搜索' />
//js
$('#ktv_name').bind('keypress', function (event) {
    if (event.keyCode == '13') {
        var url = window.location.href
        var new_url = LB.setUrlParam(url, 'ktv_name', $('#ktv_name').val())     //这一段用字符串拼接也可以
        window.location.href = new_url
    }
})

//一个抽象的jquery查询
alert($(this).parent().parent('tr').find('td:first-child').text());
alert($(this).parent().parent('tr').find('td:first-child').text());

//一个each方法丢失了this的实例:
//var that = $(this)
$('.sp_follow_ktv_id').each(function () {
    var that = $(this);
    ktv_id = $(this).attr('data-ktvid')
    $.get('/stat/following', {ktv_id:ktv_id, tp:'sp'}, function (data) {
        that.text(data.res)
    })
})

//一个寻找后代元素并加入text的实例:
function get_week (datetime) {
    var date = [];
    date = datetime.substring(0, 10).split("-");
    var ssdate=new Date(date[0], +(date[1]-1), date[2]);
    var week = ssdate.getDay();
    return ['周一', '周二', '周三', '周四', '周五', '周六', '周日'][+week - 1]
}
$('.order-item').each(function () {
    var datetime = $(this).attr('datetime')
    $(this).find('.week').text(get_week(datetime))
    $(this).find('.time').text(datetime.substring(11))
    $(this).find('.date').text(datetime.substring(0, 10))
})
