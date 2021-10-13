/* 
Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
Node.js 几乎每一个 API 都是支持回调函数的。
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
*/

let fs = require('fs')

fs.readFile('./hello.txt', {flag: 'r', encoding: 'utf-8'}, (err,data)=>{
  if(err) {
    console.log(err)
  }else {
    // console.log(data)
    lcEvent.emit('fileSuccess', data)
  }
})

let lcEvent = {
  event: {
    // fileSuccess: [fn,fn,fn]
  },
  on(eventName, cb) {
    if(this.event[eventName]) {
      this.event[eventName].push(cb)
    }else {
      this.event[eventName] = [cb]
    }
  },
  emit(eventName, data) {
    if(this.event[eventName]) {
      this.event[eventName].forEach(cb => {
        cb(data)
      });
    }
  }
}

lcEvent.on('fileSuccess', (data)=>{
  console.log('获取的数据', data)
  console.log('事情1')
})
lcEvent.on('fileSuccess', ()=>{
  console.log('事情2')
})
lcEvent.on('fileSuccess', ()=>{
  console.log('起飞')
})