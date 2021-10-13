let fs = require('fs')

let {fsRead,fsWrite} = require('./utils')
// 读取目录
const txtPath = 'all.txt'
fs.readdir('../03fs', (err,file)=>{
  if(err) {
    console.log(err)
  }else {
    file.forEach(async (e)=>{
      // console.log(e)
      let content = await fsRead(`${__dirname}/${e}`)
      await fsWrite(txtPath, content)
    })
  }
})

// var fs = require("fs");
// ​
// console.log("查看 /tmp 目录");
// fs.readdir("/tmp/",function(err, files){
//    if (err) {
//        return console.error(err);
//    }
//    files.forEach( function (file){
//        console.log( file );
//    });
// });