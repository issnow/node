var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/setCookie', (req, res, next) => {
  // 1.比如登录成功,由服务器设置cookie给客户端,cookie有效期默认一个会话,浏览器关闭即失效
  // let opts = {
  //   maxAge: 100000,//设置失效时间10秒钟
  //   httpOnly: true
  // }
  // res.cookie('isLogin', true, opts)

  // 设置加密cookie
  res.cookie('login', 'true', {signed: true}) 
  res.send('cookie设置成功')
})
router.get('/admin', (req, res, next) => {
  // 2.下次再次刷新页面重新判断cookie是否登录过
  if (req.cookies.isLogin) {
    res.send('登陆过了')
  } else {
    res.send('没登录')
  }
})
router.get('/adminSecret', (req,res)=>{
  // 加密的cookie需要使用signedCookies获取
  if(req.signedCookies.login) {
    res.send('登陆过了')
  }else {
    res.send('没登录')
  }
})
module.exports = router;