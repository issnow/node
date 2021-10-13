/**
 * 教你接受get传过来的参数
 */
var express = require('express');
var path = require('path');
var app = express();
let sqlQuery = require('./gcmysql')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
  res.render('index', {
    title: '郭成'
  })
})
app.get('/search', async (req,res)=>{
  console.log(req.query)
  const {username} = req.query
  let str = `select * from cartoon where bookname like '%${username}%'`
  let d = await sqlQuery(str)
  res.send(Array.from(d))
})
module.exports = app;
