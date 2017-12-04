PHP学习纪录
代码风格: 考虑兼容性, 使用一般风格<?php   ?>
注释: // # 通用
输出函数: echo(), print()
标准输出函数: printf(), sprintf()
print函数是有返回值的: 1 or false
printf函数也是有返回值的: 字符串长度
sprintf（）返回值为字符串本身，不用echo并不会显示
PHP的变量必须以$符开始, 然后再加上变量名
关于变量的赋值方式, 传值赋值和引用赋值，同c++
关于局部和全局变量的作用域和语法
关于静态变量的演示

可变变量:可变变量是一种独特的变量, 它可以动态的改变一个变量的名称, 在一个变量的前面加上一个变量符号“$”

php的基本的数据类型：
整形, 浮点型, 字符串, 布尔型 
数组, 对象
资源(resourse), 空值

双引号字符串: 变量用{}括起来, 不同的字符串之间用.相连
php中的数组:  $network = array(1=>”as”,2=>”df”) 
		      $network = array(“a”,”b”,”c”)
php中的对象: 对象就是类的实例，实例化一个对象，用new
php中的资源: $cn = mysql_connect(‘local’,’host’)
		     $fp = feen(“foo”,”w”)
php中的空值: Null
mixed, 一个可以存放任何类型数据的数据类型
php中的强制类型转化的两种方法.

关于变量的几个函数：
判空函数empty($a)
变量检查函数isset($a) 存在返回true
变量类型判断函数is_int()
变量类型获取函数gettype()
类型转换函数settype($a, 'float')
var_dump()函数, 打印变量的相关信息, 包括变量类型和值, 字符串还会打印长度, dump: 倒垃圾的倒
var_export(), 返回合法的php代码
变量销毁函数unset()

关于php常量:
自定义php常量: define(“CONSTANT”,”你好”)
预定义php常量: __XXX__

关于php运算符:
1.算数运算符: +-*/
2.递增递减运算符: ++
3.赋值运算符: +=
4.比较运算符: ==
5.逻辑运算符: and &  or ||
6.位运算符。&|
7.字符串运算符: . 字符串连接符 .=连接赋值运算符
8.数组运算符: + 数组联合运算符
9.错误抑制运算符: 表达式前加@，可以抑制错误信息的报错
11.三元运算符
12.执行运算符: `dos命令`

在 PHP 中, 只有一个字符串运算符.
并置运算符.用于把两个字符串值连接起来
<?php 
$txt1="Hello world!"; 
$txt2="What a nice day!"; 
echo $txt1 . " " . $txt2; 
?> 

在 PHP 中, array() 函数用于创建数组
在 PHP 中, 有三种类型的数组
数值数组 - 带有数字 ID 键的数组
关联数组 - 带有指定的键的数组，每个键关联一个值
多维数组 - 包含一个或多个数组的数组
count() 函数用于返回数组的长度（元素的数量）：

遍历关联数组: foreach - 根据数组中每个元素来循环代码块
<?php
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
foreach($age as $x=>$x_value)
  {
   echo "Key=" . $x . ", Value=" . $x_value;
   echo "<br>";
   }
?>

数组的排序函数：
sort() - 对数组进行升序排列
rsort() - 对数组进行降序排列
asort() - 根据关联数组的值，对数组进行升序排列
ksort() - 根据关联数组的键，对数组进行升序排列
arsort() - 根据关联数组的值，对数组进行降序排列
krsort() - 根据关联数组的键，对数组进行降序排列
eg:
<?php
$cars=array("Volvo", "BMW", "Toyota");
sort($cars);
?>

PHP中预定义了几个超级全局变量(superglobals), 这意味着它们在一个脚本的全部作用域中都可用. 
你不需要特别说明, 就可以在函数及类中使用
* $GLOBALS: 一个包含了全部变量的全局组合数组, 变量的名字就是数组的键
* $_SERVER: 一个包含了诸如头信息(header), 路径(path), 以及脚本位置(script locations)等等信息的数组, 这个数组中的项目由 Web 服务器创建
* $_REQUEST: 用于收集HTML表单提交的数据。
* $_POST: 被广泛应用于收集表单数据, 在HTML form标签的指定该属性: "method="post"
* $_GET: 同样被广泛应用于收集表单数据, 在HTML form标签的指定该属性: "method="get"
* $_FILES
* $_ENV
* $_COOKIE
* $_SESSION

关于_REQUEST:
<html>
<body>
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>
<?php 
$name = $_REQUEST['fname']; 
echo $name; 
?>
</body>
</html>

关于_GET:
<html>
<body>
<a href="test_get.php?subject=PHP&web=runoob.com">Test $GET</a>
</body>
</html>
其中的test_get.php
<html>
<body>
<?php 
echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>
</body>
</html>

关于php函数:
PHP 的真正威力源自于它的函数
1.在 PHP 中, 提供了超过 1000 个内建的函数
2.自建函数function name () {}

php的魔术常量
PHP 向它运行的任何脚本提供了大量的预定义常量
不过很多常量都是由不同的扩展库定义的, 只有在加载了这些扩展库时才会出现, 或者动态加载后, 或者在编译安装的时候已经包括进去了
有八个魔术常量它们的值随着它们在代码中的位置改变而改变
1.__LINE__:当前文件中的当前行号
2.__FILE__:当前文件的完整路径和文件名
3.__DIR__:当前文件所在的目录
4.__FUNCTION__:当前所处函数被定义时的名字
5.__CLASS__:当前所处类名
6.__NAMESPACE__:域名空间

关于php中的域名空间：PHP 命名空间可以解决以下两类问题：
用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。
为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名（或简短）的名称，提高源代码的可读性。

类中的变量使用 var 来声明, 变量也可以初始化值
<?php
class phpClass {
  var $var1;
  var $var2 = "constant string";
  function myfunc ($arg1, $arg2) {
     [..]
  }
  [..]
}
?>

