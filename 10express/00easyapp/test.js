let express = require('express')
const app = express()
app.get('/', (req,res)=>{
  res.send('<h1>首页</h1>')
})

app.listen(8080, ()=>{
  console.log('ok 8080端口起飞')
})