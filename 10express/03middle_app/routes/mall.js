// 实例化一个模块,此路由模块相当于一个小小的app
// 商城的首页
let express = require('express')

let router1 = express.Router()
// 在这里还可以继续写应用中间件
 router1.use((req,res,next)=>{
  console.log('商城中间件')
  next()
})
router1.get('/', (req,res)=>{
  res.send('商城首页')
})
router1.get('/list', (req,res)=>{
  res.send('商城列表页')
})
module.exports = router1