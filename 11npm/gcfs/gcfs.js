let fs = require('fs')
const { resolveSoa } = require('dns')

function read(path) {
  return new Promise((resolve,reject)=>{
    fs.readFile(path, {flag: 'r', encoding: 'utf-8'},(e,d)=>{
      if(e) {
        reject(e)
      }else {
        resolve(d)
      }
    })
  })
}

function write(path,data) {
  return new Promise((resolve,reject)=>{
    fs.writeFile(path, data, {flag: 'a', encoding: 'utf-8'},e=>{
      if(e) {
        reject(e)
      }else {
        resolve('success')
      }
    })
  })
}
function mkdir(path) {
  return new Promise((resolve,reject)=>{
    fs.mkdir(path, e=>{
      if(e) {
        reject(e)
      }else {
        resolve('success')
      }
    })
  })
}
function rmdir(path) {
  return new Promise((resolve,reject)=>{
    fs.rmdir(path, e=>{
      if(e) {
        reject(e)
      }else {
        resolve('success')
      }
    })
  })
}
function unlink(path) {
  return new Promise((resolve,reject)=>{
    fs.unlink(path, e=>{
      if(e) {
        reject(e)
      }else {
        resolve('success')
      }
    })
  })
}

function rename(oldpath,newpath) {
  return new Promise((resolve,reject)=>{
    fs.rename(oldpath,newpath, (e)=>{
      if(e) {
        reject(e)
      }else {
        resolve('success')
      }
    })
  })
}
function readdir(path) {
  return new Promise((resolve,reject)=>{
    fs.readdir(path, (e,files)=>{
      if(e) {
        reject(e)
      }else {
        resolve(files)
      }
    })
  })
}
module.exports = {
  read,
  write,
  mkdir,
  rmdir,
  unlink,
  rename,
  readdir
}