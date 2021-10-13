let a = 1
let b = 2

// exports就是默认导出的对象
exports.a = a
module.exports.b = b

// 系统默认设置了:exporsts = modules.exports
// exports = {name: 'xiaomi'}

// module.exports = {name: 'xiaomi'}//此时require的地方就变成了新对象



/**
 * Node.js特点（记住三句话）
 * 事件驱动
 * 非阻塞IO模型（异步）
 * 轻量和高效 
 * 1.一次一次导出
 * exports.a = a
 * exports.b = b
 * 2.一次性导出全部
 * module.exports = {
 *  a,
 *  b
 * }
 * 
 * 3.引入,引入是一个对象(exports)
 * let obj = require("./a");
 * 
 * 4.解构赋值引入 
 * let {sum,fn} = require("./a");自定义模块，要写成相对路径
 * console.log(sum(10, 20, 30));
 * 
 * 5.模块初始化
 * 模块的初始化
  一个模块中的JS代码仅在模块第一次被使用时执行一次，并且在使用的过程中进行初始化，之后缓存起来便于后续继续使用、
 6.node main.js // 运行main.js启动程序，main.js称为主模块

 7.也可以这样导出
module.exports.add = add  

module.exports.foo = foo
 */
