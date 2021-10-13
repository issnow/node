let request = require('request')
let fs = require('fs')
function req(url) {
  return new Promise((resolve,reject)=>{
    request(url, (err,res,body) => {
      if(err) {
        reject(err)
      }else { 
        resolve({
          body,
          res
        })
      }
    })
  })
}

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

function fsDir(path) {
  return new Promise((resolve, reject)=>{
    fs.mkdir(path, err=>{
      if(err) {
        reject(err)
      }else {
        resolve('success')
      }
    })
  })
}

module.exports = {
  fsRead,fsWrite,req,fsDir
}
