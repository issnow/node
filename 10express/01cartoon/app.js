const express = require('express')
const sqlQuery = require('./gcmysql')
const ejs = require('ejs')
const path = require('path')
const app = express()
app.set('views', 'views')
app.set('view engine', 'ejs')
app.engine('ejs', ejs.__express)

// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', async (req,res)=>{
  // 数据库前18本书获取出来
  let str = 'select id,bookname,author,img,book_url from cartoon limit 18'
  let d = await sqlQuery(str)
  // d = JSON.stringify(Array.from(d))
  // console.log(d)
  // res.send(d)
  // res.json(Array.from(d))
  let opts = {
    arr: Array.from(d)
  }
  res.render('bookIndex',opts)
})

app.get('/c/:id', async (req,res)=>{
  const {id} = req.params
  let str = 'select * from cartoon where id = ?'
  let d = await sqlQuery(str, [id])
  let opts = {
    d:Array.from(d)[0]
  }
  console.log(d, 'c/id')
  res.render('detail', opts)
})
app.get('/list', (req,res)=>{

})
app.get('/books/:bookid', async (req,res)=>{
  let str = 'select * from cartoon where id = ?'
  const {bookid} = req.params
  let d = await sqlQuery(str, [bookid]) 
  res.send(Array.from(d))
})

module.exports = app