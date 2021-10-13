/*
 * @Author: snow
 * @Date: 2020-07-29 16:44:27
 */
/**
 * 教你封装http模块
 */
let http = require('http')
let path = require('path')
let url = require('url')
let fs = require('fs')

class App_{
  constructor() {
    this.server = http.createServer()
    this.reqEvent = {}
    this.staticDir = '/static'
    this.server.on('request',(req,res)=>{
      // 解析路径
      let pathObj = path.parse(req.url)
      // console.log(pathObj)
      if(pathObj.dir in this.reqEvent) {
        res.render = render
        req.pathObj = pathObj
        this.reqEvent[pathObj.dir](req,res)
      }else if(pathObj.dir === this.staticDir) {
        res.setHeader('Content-Type', this.getContentType(pathObj.ext))
        let rs = fs.createReadStream('./static/'+pathObj.base)
        rs.pipe(res)
       }else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<h1>404,页面找不到</h1>')
      }
    })
  }
  on(path, cb) {
    this.reqEvent[path] = cb
  }
  run(port, cb) {
    this.server.listen(port,cb)
  }
  getContentType(extName) {
    switch (extName) {
      case '.jpeg':
        return 'image/jpeg'
      case '.html':
        return 'text/html;charset=utf-8'
      case '.js':
        return 'text/javascript;charset=utf-8'
      case '.json':
        return 'text/json;charset=utf-8'
      case '.gif':
        return 'image/gif'
      case '.css':
        return 'text/css'
    }
  }
}
function render(option, path) {
  fs.readFile(path,{encoding: 'utf-8'},(e,d)=>{
    if(e) {
      console.log(e)
    }else {
      // 匹配数组
      d = replaceArr(d, option)
      // 匹配变量将其替换
      d = replaceStr(d, option)
      this.end(d)
    }
  })
}
function replaceStr(d,o) {
  let reg = /\{\{(.*?)\}\}/igs
  let res
  while(res = reg.exec(d)) {
    let strKey = res[1].trim()
    let strValue = o[strKey]
    d = d.replace(res[0], strValue)
  }
  return d
}

function replaceArr(d,option) {
  reg = /\{\%for \{(.*?)\} \%\}(.*?)\{\%endfor\%\}/igs
  while(res = reg.exec(d)) {
    let strKey = res[1].trim()
    let arr = option[strKey]
    let final = arr.reduce((p,n)=>{
      return p += replaceStr(res[2], {item:n })
    }, '')
    d = d.replace(res[0], final)
  }  
  return d
}
module.exports = App_