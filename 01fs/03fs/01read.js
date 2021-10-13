let fs = require('fs')
// 导入文件模块
// node,读写文件也有同步和异步的接口

// 同步读取
let fd = fs.openSync('hello.txt', 'r')
// console.log(fd)

// 同步 等待和阻塞
// let content = fs.readFileSync('hello.txt', {flag: 'r',encoding: 'utf-8'})

// 异步
fs.readFile('hello.txt', {flag: 'r', encoding: 'utf-8'}, function(err, data) {
  if(err) {
    console.log(err)
  }else {
    console.log(data)
  }
  console.log(456)
})
console.log(123)

// console.log(content)


// 用promise封装fs.readFile方法,解决异步调用的循环写法
function fsRead(path) {
  return new Promise((resolve, reject)=>{
    fs.readFile(path, {flag: 'r',encoding: 'utf-8'}, (err,data)=>{
      if(err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}

// let res = fsRead('hello.txt').then((data)=>{
//   console.log(data, 'ohou')
// })

async function ReadList() {
  var file2 = await fsRead('hello.txt')
  var file3 = await fsRead(file2+'.txt')
  var file4 = await fsRead(file3+'.txt')
  console.log(file4, 'file4')
}

ReadList()
