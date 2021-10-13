/**
 * 一.教你爬音乐
 * 1.获取音乐相关的信息,通过音乐相关的信息获取mp3地址
 * 2.如果获取大量的音乐信息,通过获取音乐列表进行操作
 * 3.通过音乐分类页,获取音乐列表
 */
let fs = require('fs')
let axios = require('axios')
let path = require('path')
let cheerio = require('cheerio')
let baseUrl = 'http://www.app-echo.com/api/recommend/sound-day?page='
async function getPage(n) {
  let httpUrl = baseUrl + n
  let {data} = await axios.get(httpUrl)
  // console.log(data.list)
  let arr = []
  data.list.forEach((e,i)=>{
    let title = e.sound.name
    let filename = path.parse(e.sound.source).name
    let mp3Source = e.sound.source
    // let content = `${filename},${mp3Source},${title}\n`
    arr.push({
      title,
      filename,
      mp3Source,
    })
    // fs.writeFile('./music.txt', content, {flag: 'a'}, err=>{
    //   if(err) throw err
    //   console.log('写入完成'+title)
    // })
    // console.log(title)
    // console.log(mp3Source)
    // download(mp3Source, filename)
  })
  fs.writeFile('./music.json', JSON.stringify(arr), {flag: 'a'}, err=>{
    if(err) throw err
    console.log('写入json完成')
  })
}
getPage(1)

async function download(url,tit) {
  let {data} = await axios.get(url,{responseType:'stream'})
  let ws = fs.createWriteStream(`./mp3/${tit}.mp3`)
  data.pipe(ws)
  // 有打开就有关闭 记住了
  data.on('end',()=>{
    ws.end()
  })
}