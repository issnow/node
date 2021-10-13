/*
 * @Author: snow
 * @Date: 2021-09-29 13:15:59
 * @Description: 
 */
const express = require('express');
const app = express()

// 1.字符串路径
app.get('/', (req,res)=>{
  console.log(req.headers, 'body')
  res.send('这是首页')
})

// 2.字符串模式路径

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

// 3.正则表达式路径
app.get(/\/a\d{10,}/,(req,res)=>{
  console.log(req.cookie)
  res.send('虚拟页面')
})

// 4.动态路由
app.get('/news/:cateID/a:newsID', (req,res)=>{
  
  const {newsID, cateID} =req.params
  console.log(newsID)
  res.send('新闻id页面:'+newsID+'分类id:'+cateID)
})

// 可以写多个函数处理路由请求
app.get('/user/:cateID/a:newsID', (req,res,next)=>{
  req.lchost = '127.0.0.1'
  next()
}, (req,res)=>{
  const {newsID, cateID} =req.params
  console.log(newsID)
  res.send('新闻id页面:'+newsID+'分类id:'+cateID+'req.lchost:'+req.lchost)
})
module.exports = app