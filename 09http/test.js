let http = require('http')
const app = http.createServer()

app.on('request', (req,res)=>{
  console.log(req.url)
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if(req.url == '/') {
    res.end('<h3>首页</h3>')
  }
})

app.listen(9000,()=>{
  console.log('ok start')
})