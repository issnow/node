let fs = require('fs')

// 删除目录
fs.rmdir('./abc', err=>{
  if(err) {
    console.log(err)
  }
})