/**
 * 1.Node.js Stream(流) 简单易懂全解析
 * - https://juejin.im/post/5a75cffd5188257a6b05c7e6
 * - 1.node.js中的流是什么
 * - 2.为什么要在node中使用流
 */

let fs = require('fs')

// 1.创建写入流
/**
 * !options配置项 {flags:默认值'w',encoding:默认值'utf8'},因此可以省略options
 */
// let ws = fs.createWriteStream('hello.txt',{encoding: 'utf-8', flags: 'w'})
let ws = fs.createWriteStream('hello.txt')
// console.log(ws)

// 监听文件打开事件
ws.on('open', ()=>{
  console.log('open')
})

// 监听文件准备事件
ws.on('ready', ()=>{
  console.log('ready')
})

// 监听文件关闭事件
ws.on('close', ()=>{
  console.log('close')
})

// 文件流式写入
ws.write('helloworld\n', err=>{
  if(err) {
    console.log(err)
  }else {
    console.log('内容流入完成')
  }
})
ws.write('helloworld2\n', err=>{
  if(err) {
    console.log(err)
  }else {
    console.log('内容流入完成2')
  }
})
ws.write('helloworld3\n', err=>{
  if(err) {
    console.log(err)
  }else {
    console.log('内容流入完成3')
  }
})

// 写入完成
ws.end(()=>{
  console.log('文件写入关闭')
})
