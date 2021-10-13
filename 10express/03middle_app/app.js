/**
 * 教你处理中间件,
 */
var express = require('express');
var path = require('path');
let router1 = require('./routes/mall');
let indexRouter = require('./routes/index')
let api = require('./routes/api')
const multer = require('multer')
var app = express();

const upload = multer({
  dest: './static/upload'
})

app.use(upload.any())

app.use((req,res,next)=>{
  // 允许所有的源,跨域
  res.append('Access-Control-Allow-Origin','*')
  // 允许所有的请求类型
  res.append('Access-Control-Allow-Content-Type', '*')
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

// 添加中间件
app.use((req,res,next)=>{
  res.addNum = (a,b)=>a+b
  console.log('访问任何页面')
  next()
})
// app.get('/', (req,res)=>{
//   res.send('this is home'+res.addNum(7,9))
// })

// 路由中间件
app.use('/', indexRouter)
app.use('/mall', router1)

// ajax请求
app.use('/api', api)

app.get('/ajax', (req,res)=>{
  console.log(req.body, req.query)
  res.send('哈哈哈哈')
})
app.post('/upload',upload.single('image'), (req,res)=>{
  console.log(req.body)

  console.log(req.file,req.files)
  res.json(req.files)
})

module.exports = app;
