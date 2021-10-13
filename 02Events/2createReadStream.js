let fs = require('fs')

// 创建读取流
/**
 * !options配置项 {flags:默认值'r',encoding:默认值'null'}
 * !如果不配置encoding,则读取到的chunk是buffer
 */
let rs = fs.createReadStream('./hello.txt', {flags: 'r', encoding: 'utf-8'})

let ws = fs.createWriteStream('my.txt', {flags: 'w'})
// console.log(rs)

rs.on('open', ()=>{
  console.log('open')
})

// rs.on('close', ()=>{
//   console.log('close')
//   ws.end(()=>{
//     console.log('end')
//   })
// })
rs.on('end', ()=>{
  ws.end()
})
// 每一批数据流入完成
rs.on('data', (chunk)=>{
  console.log('单批数据流入')
  console.log(chunk, chunk.length)
  ws.write(chunk, err=>{
    if(err) {
      console.log(err)
    }else {
      console.log('ok')
    }
  })
})

