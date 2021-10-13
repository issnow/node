/**
 * 教你处理form表单传过来的参数,1.get;2.post
 */
var express = require('express');
var path = require('path');
var url = require('url')
let qs = require('qs')
const { query } = require('express');
var app = express();
let sqlQuery = require('./gcmysql')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public' )));

// 解析post提交的数据
app.use(express.urlencoded())

app.get('/', (req,res)=>{
  res.render('index', {})
})
// 一.get方式传过来的参数
// 1.使用qs库提取
app.get('/search', (req,res)=>{
  console.log(req, 'req')
  // console.log(req.url)
  // console.log(url.parse(req.url))
  // 提取问号后面的字符串
  let str = req.url.split('?')[1]
  let obj = qs.parse(str)
  // console.log(obj, 'obj')
  res.send('搜索页面')
})

// 2.使用express提取,直接通过req.query获取
app.get('/search1', async (req,res)=>{
  console.log(req.query)
  let strSql = `select * from cartoon where bookname like "%${req.query.searchKey}%"`
  let d = await sqlQuery(strSql)
  console.log(d,'d')
  res.json(Array.from(d))
})

// 设置一个ajax页面,模仿前段请求
app.get('/ajax', (req,res)=>{
  // 允许所有的源,跨域
  res.append('Access-Control-Allow-Origin','*')
  // 允许所有的请求类型
  res.append('Access-Control-Allow-Content-Type', '*')
  console.log(req.query, req.body)
  res.render('ajax')
})

// 二.post传过来的参数,app.use(express.urlencoded()),然后通过req.body获取
app.post('/search',(req,res)=>{
  console.log(req.body)
  res.send('post页面')
})

// 登录页
app.get('/login',(req,res)=>{
  res.render('login', {title: '登录页 '})
})
// 处理登录请求
app.post('/login', async (req,res)=>{
  const {username,password} = req.body
  let str = `select * from user where username = ? and password = ?`
  let d = await sqlQuery(str, [username,password])
  if(d.length === 0) {
    res.send('登录失败')
  }else {
    res.send('登录成功')
  }
})

module.exports = app;
