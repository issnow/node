let a = require('./index')
// 1.在没有任何内容导出去的情况下获取某个文件的内容,会得到一个控对象
// 2.require获取文件路径时,可以不加后缀名,默认的后缀名就是js

let b = require('./index')
console.log(a==b)
console.log(a)