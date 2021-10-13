let os = require('os')

//  1.查看cpu信息
// console.log(os.cpus())

// 2.以整数的形式返回系统的内存总量（以字节为单位）
// console.log(os.totalmem()/(1024**3))

// 3.查看系统结构
// console.log(os.arch())

// 4.以整数的形式返回空闲的系统内存量（以字节为单位）
// console.log(os.freemem()/(1024**3))

console.log(os.hostname())

console.log(os.platform())