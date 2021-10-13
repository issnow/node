let express = require('express')
/**
 * session路由页面
 */
let router = express.Router()

// 设置session
router.get('/setSession',(req,res)=>{
  // 登陆之后,要求能够快速获取user的姓名,登记,是否登录
  req.session.username ='小明'
  req.session.isLogin = true
  req.session.vipLevel = 5
  // req.session.cookie.maxAge = 10000
  res.send('设置session')
})
// 获取session
router.get('/getSession',(req,res)=>{
  console.log(req.session)
  if(req.session.username) {
    res.send(`welcome ${req.session.username} 登录 <a href='/session/exitSession'>退出登录</a>`)
  }else {
    res.send('未登录')
  }
})

// 销毁session
router.get('/exitSession',(req,res)=>{
  req.session.destroy(err=>{
    res.send('销毁session成功')
  })
})
module.exports = router