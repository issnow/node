let express = require('express')

let api = express.Router()
let sqlQuery = require('../gcmysql')

// 允许前端跨域请求的中间件
api.use((req,res,next)=>{
  // 允许所有的源,跨域
  res.append('Access-Control-Allow-Origin','*')
  // 允许所有的请求类型
  res.append('Access-Control-Allow-Content-Type', '*')
  next()
})

// 提供第n页,每页展示m条数据
api.get('/book/:pageSize/:pageNum', async (req,res)=>{
  // 允许所有的源,跨域
  // res.append('Access-Control-Allow-Origin','*')
  // 允许所有的请求类型
  // res.append('Access-Control-Allow-Content-Type', '*')
  let {pageSize,pageNum} = req.params
  pageSize *= 1
  pageNum *= 1
  console.log(req.params)
  let start = (pageNum-1)*pageSize
  console.log(start, pageNum)
  let str2 = `select * from cartoon limit ${start},${pageSize}`
  let d2 = await sqlQuery(str2)
  console.log(d2, '---')
  console.log(d2)
  console.log(Array.from(d2))
  res.json(Array.from(d2))
})

api.get('/ajax',async(req,res)=>{
  console.log(req.body,req.query)
  res.json({
    code:0,
    msg: 'success'
  })
})

module.exports = api