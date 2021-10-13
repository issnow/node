// 获取html文档的内容,跟jQuery一样
/**
 * 1.教你爬虫表情包
 */
let cheerio = require('cheerio')
let axios = require('axios')
let fs = require('fs')
const url = require('url')
const path = require('path')
let httpUrl = 'https://www.doutula.com/article/list/?page=1'
axios.get(httpUrl).then(({data})=>{
  // console.log(data)
  let $ = cheerio.load(data)
  // 获取当前表情页面链接
  $('#home .col-sm-9>a').each((i,e)=>{
    // console.log(e)
    let pageUrl = $(e).attr('href')
    // console.log(pageUrl)
    let title = $(e).find('.random_title').text()
    let reg = /(.*?)\d/igs
    title = reg.exec(title)[1]
    // console.log(title)
    fs.mkdir(`./img/${title}`,err=>{
      if(err) {
        console.log(err)
      }
    })
    if(pageUrl) {
      parsePage(pageUrl, title)
    }
  })
})

async function parsePage(url,title) {
  let {data} = await axios.get(url)
  let $ = cheerio.load(data)
  $('.container .col-sm-9 .list-group-item .pic-content .artile_des a img').each((i,e)=>{
    let imgUrl = $(e).attr('src')
    // console.log(path.parse(imgUrl))
    let extName = path.extname(imgUrl)
    // console.log(imgUrl)
    // 创建写入流
    let ws = fs.createWriteStream(`./img/${title}/${title}-${i}${extName}`)
    axios.get(imgUrl, {responseType: 'stream'}).then(({data})=>{
      data.pipe(ws)
      console.log(`图片加载完成${title}-${i}`)
      // 关闭写入流
      data.on('close',()=>{
        ws.end(()=>{})
      })
    })
  })
}