const express = require('express')
const app = express()
const sqlQuery = require('./gcmysql')
// 使用ejs模板引擎
const ejs = require('ejs')
// 将模板引擎与express关联
app.set('views', 'views')//设置视图的对应路径
app.set('view engine', 'ejs')// 设置默认的模板引擎
app.engine('ejs', ejs.__express)// 定义模板引擎
app.get('/', async (req,res)=>{
  // 数据库前28本书获取出来
  let str = 'select id,bookname,author,img from cartoon limit 28'
  let d = await sqlQuery(str)
  // d = JSON.stringify(Array.from(d))
  // console.log(d)
  // res.send(d)
  // res.json(Array.from(d))
  let options = {
    title: '首页',
    articleTitle: '<h1>文章标题</h1>'
  }
  res.render('index', options)
})
app.get('/tj', (req,res)=>{
  // 条件显示
  let option = {
    username: '小明',
    gender:'男'
  }
  res.render('condition',option)
})

app.get('/loop', (req,res)=>{
  // 循环
  const opts = {
    arr: ['手机', '眼镜', '耳机']
  }
  res.render('loop', opts)
})
app.get('/books/:bookid', async (req,res)=>{
  let str = 'select * from cartoon where id = ?'
  const {bookid} = req.params
  let d = await sqlQuery(str, [bookid]) 
  res.send(Array.from(d))
})

module.exports = app