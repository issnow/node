let fs = require('fs')
let {fsRead,fsWrite} = require('./utils')

fs.rmdir('./abc', err=>{
  if(err) {
    console.log(err)
  }else {
    console.log('ok')
  }
})