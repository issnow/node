/**
 * buffer(缓冲器)解决了什么问题
 * 1.数组不能进行二进制数据的操作
 * 2.js数组不想java、python等语言效率高
 * 3.buffer内存空间开辟出固定大小的内存
 */

//  将字符串转成buffer对象
let str = 'helloworld'
let buf = Buffer.from(str)
// console.log(buf)


// 输出buffer内容
// console.log(buf.toString())

// 开辟一个空的buffer
let buf2 = Buffer.alloc(5)
buf2[0] = 10
console.log(buf2)

let buf3 = Buffer.allocUnsafe(5)

console.log(buf3)