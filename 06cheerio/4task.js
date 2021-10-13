/**
 * 1.自己爬表情包
 */

let axios = require('axios')
let fs = require('fs')
let path = require('path')
let cheerio = require('cheerio')
let httpUrl = 'https://www.fabiaoqing.com/bqb/lists/page/'
async function getPage(n){
  let {data} = await axios.get(httpUrl + n + '.html')
  let $ = cheerio.load(data)
  $('#container .bqba').each((i,e)=>{
    let tit = $(e).find('h1.ui.header').text()
    let url = 'https://www.fabiaoqing.com'+$(e).attr('href')
    fs.mkdir(`./myimg/${tit}`,(err)=>{
      if(err) {
        console.log(err)
      }else {
        parsePage(url,tit)
      }
    })
  })
}
getPage(2)
async function parsePage(url,tit) {
  let {data} = await axios.get(url)
  let $ = cheerio.load(data)
  $('#container img.bqbppdetail').each((i,e)=>{
    let imgUrl = $(e).attr('data-original')
    console.log(imgUrl, 'tit')
    downloadImage(imgUrl,tit,i)
  })
}
async function downloadImage(url,tit,i){
  let {data} = await axios.get(url,{responseType:'stream'})
  let extName = path.extname(url)
  let ws = fs.createWriteStream(`./myimg/${tit}/${tit}-${i}${extName}`)
  data.pipe(ws)
  console.log(`图片加载完成${tit}${i}`)
  data.on('end',()=>{
    ws.end()
  })
}