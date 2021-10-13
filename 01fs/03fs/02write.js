//  引入fs模块
let fs = require('fs')
// fs.writeFile('hello.txt', '晚饭吃啥2?', {encoding: 'utf-8',flag: 'r'}, (err)=>{
//   if(err) {
//     console.log(err)
//   }else {
//     console.log('success')
//   }
// })


function fsWrite(path, data) {
  return new Promise((resolve,reject)=>{
    fs.writeFile(path,data,{encoding: 'utf-8',flag: 'a'}, err=>{
      if(err) {
        reject(err)
      }else {
        resolve(err)
      }
    })
  })
}

async function writeList() {
  await fsWrite('gc.txt', '1今天中午吃什么?\n')
  await fsWrite('gc.txt', '2今天中午吃什么?\n')
  await fsWrite('gc.txt', '3今天中午吃什么?\n')
}

writeList()