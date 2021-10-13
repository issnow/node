let fs = require('fs')

// 创建目录
fs.mkdir('./abc', err=>{
  if(err) {
    console.log(err)
  }else {
    console.log('success')
  }
})