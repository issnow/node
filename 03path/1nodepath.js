let path = require('path')
const fs= require('fs')

// console.log(path)

let str = '1.jpg'
// 1.解析文件的后缀名
let name = path.extname(str)
// console.log(name)

// 2.path.resolve() 方法会将路径或路径片段的序列解析为绝对路径。
// 3.path.join() 方法会将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
// __dirname path.dirname() 方法会返回 path 的目录名
// console.log(__dirname, 'dirname')

let arr = ['/sxt', 'fe', 'middle']
let info1 = path.resolve(...arr)
// console.log(info1)// /sxt/fe/middle

let info2 = path.join(__dirname, 'sxt', 'fe', 'middle')
// console.log(info2)  // /Users/snow/Desktop/app/node/node-demo/03path/sxt/fe/middle


let info3 = path.join(__dirname, 'xinwen', 'guonei.html')

// fs.readFile(info3, {encoding: 'utf-8', flag: 'r'},(err,data)=>{
//   if(err) {
//     console.log(err)
//   }else {
//     console.log(data)
//   }
// })

// ! ../是返回上一层, ./是当前层
let info4 = path.join(__dirname, 'a', '../b', './c', 'abc')
console.log(info4)