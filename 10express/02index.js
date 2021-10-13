let http = require('http')
const app = http.createServer()
app.on('request', (req,res)=>{
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  console.log(req)
  if(req.url === '/') {
    res.end('<h1>首页</h1>')
  }
})

app.listen(3000, ()=>{
  console.log('ok 起飞在3000端口')
})