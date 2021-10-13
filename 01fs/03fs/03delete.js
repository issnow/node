let fs = require('fs')

// 删除文件
fs.unlink('gc.txt', err=>{
  if(err) {
    console.log(err)
  }else {
    console.log('success')
  }
})