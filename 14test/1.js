/*
 * @Author: snow
 * @Date: 2021-05-06 10:17:07
 */
const express = require('express');
let app = express()

let port = 9000

app.get('/aaa', (req,res)=>{
  res.json({
    code: 1,
    data: [
      {
        name: 'gc',
        age: 12
      }
    ]
  })
})

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`)
})