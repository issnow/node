let http = require('http')
/**
 * 1.教你建立服务器,内置模块http
 */
// 创建server服务器对象
let server = http.createServer()

// 监听对当前服务器对象的请求
server.on('request', (req,res)=>{
  // 当服务器被请求时,会触发请求事件,并传入请求对象和响应对象
  // console.log(req)
  console.log(req.url)
  // console.log(req.headers)

  // 设置编码格式
  res.setHeader('Content-Type','text/html; charset=UTF-8')
  // 根据路径信息,显示不同的页面内容
  if(req.url=='/') {
    res.end('<h2>首页</h2><img width="270" height="129" src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />')
  }else if(req.url == '/gnxw') {
    res.end('<h2>国内新闻</h2>')
  }else if(req.url == '/ylxw') {
    res.end('<h2>娱乐新闻</h2>')
  }else {
    res.end('<h2>404!页面找不到</h2>')
  }
})

// 服务器监听的端口号,默认端口号是80
server.listen(80,()=>{
  // 启动监听端口号成功时触发
  console.log('服务器启动成功!')
})