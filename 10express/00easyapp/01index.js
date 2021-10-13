/**
 * 教你使用express创建项目
 */
let express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
  res.send('hello world')
})

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`)
})