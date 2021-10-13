/**
 * 教你使用express route
 * express路径有三种表达形式:字符串,字符串模式,正则表达式,动态路由
 */
const url = require('url')
const express = require('express')
const app = express()

// 1.字符串路径
app.get('/', (req,res)=>{
  res.send('<p>首页</p>')
})

// 2.字符串模式路径
app.get('/ab?cd', (req,res)=>{
  console.log(req.url)
  res.send(`<p>ok 路径是${req.url}</p>`)
})

// 3.正则表达式
app.get(/(abc|guocheng)/ig, (req,res)=>{
  res.send(`<h3>${req.url}</h3>`)
})

app.get(/^\/a\d+/ig, (req,res)=>{
  res.send(`<p>这个路径是${req.url}<p>`)
})

// 4.动态路由

app.get('/user1/a:uid/password/:password', (req,res)=>{
  // 路径上的参数可以通过req.params获取
  console.log(req.params)
  const {uid,password} = req.params
  res.send(`<div><p>user是${uid}</p><p>密码是${password}</p></div>`)
})

// get后面可以再传一个回调函数,多个回调函数可以处理一条路由(确定指定了next对象)
app.get('/user/a:uid/password/:password', (req,res,next)=>{
  // 这里可以处理请求
  req.gchost = '127.0.0.1'
  next()
},(req,res)=>{
  // 这里专门响应很棒
  console.log(req)
  const {uid,password} = req.params
  res.send(`<div><p>user是${uid}</p><p>密码是${password}</p>
    <p>gchost是${req.gchost}</p>
  </div>`)
})
app.listen(3000, ()=>{
  console.log('ok 端口起飞在3000')
})