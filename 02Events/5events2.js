let EventEmitter = require('events')
let fs = require('fs')
// class MyEmiter extends EventEmitter{}

// const myEmiter = new MyEmiter()
const myEmiter = new EventEmitter()

myEmiter.on('helloSuccess', data=>{
  console.log(data, 1)
})
myEmiter.on('helloSuccess', data=>{
  console.log(data, 2)
})

// fs.readFile('./hello.txt', {encoding: 'utf-8',flag: 'r'}, (err,data)=>{
//   if(err) {
//     console.log(err)
//   }else {
//     myEmiter.emit('helloSuccess', data)
//   }
// })

function fsRead(path) {
  return new Promise((resolve,reject)=>{
    fs.readFile(path, {encoding: 'utf-8',flag: 'r'}, (err,data)=>{
      if(err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}

async function fn() {
  let res = await fsRead('./hello.txt')
  myEmiter.emit('helloSuccess', res)
}

fn()// 函数的时候不要忘记执行