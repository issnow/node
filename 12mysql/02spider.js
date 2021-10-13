/**
 * 教你爬虫爬到的数据存在mysql里面
 */
let mysql = require('mysql')
let cheerio = require('cheerio')
let axios = require('axios')

let page = 1
let count = 1 
let con = mysql.createConnection({
  host: 'localhost',
  // port: '3306',端口号默认3306,可不写
  user: 'root',
  password: '11223344',
  database: 'mall'//数据库的名字
})
function time(n) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
    },n)
  })
}
async function getData() {
  for(var i = 10; i < 30;i++) {
    await time((i-10)*1000)
    getPageUrl(i)
  }
}
getData()
// 获取第n个页面所有的连接
async function getPageUrl (num) {
  let httpUrl = `https://volmoe.com/l/all,all,all,sortpoint,all,all/${num}.htm`
  let res = await axios.get(httpUrl)
  // console.log(res.data)
  let $ = cheerio.load(res.data)
  // console.log($('body .top_nav form').attr('action'))
  $('.listbg td a').has('img').each((i,e)=>{
    // console.log(e)
    let href = $(e).attr('href')
    // console.log(href)
    getBookInfo(href)
  })
}
// getPageUrl(page)
async function getBookInfo(href) {
  let res = await axios.get(href)
  let $ = cheerio.load(res.data)
  let bookname = $('#author>b').text()
  // console.log(bookname)
  let author = $('#author #status').eq(0).find('a').first().text()
  // console.log(author)
  let str2 = $('#author #status').eq(1).text()
  let reg = /狀態：(.*?)地區：(.*?)語言：.*?最後出版：(.*?)分類：(.*?)$/igs
  let status,area,publicTime,classify,res2,res3,subscribe,collection,hot
  while(res2 = reg.exec(str2)) {
    status = res2[1].trim()
    area = res2[2].trim()
    publicTime = res2[3].trim()
    classify = res2[4].trim()
  }
  let str3 = $('#author #status').eq(3).text()//
  let reg2 = /.*?訂閱：(.*?)收藏：(.*?)熱度：(.*?)$/igs
  while(res3 = reg2.exec(str3)) {
    subscribe = res3[1].trim()
    collection = res3[2].trim()
    hot = res3[3].trim()
  }
  let img = $('#img_book').attr('src')
  let briefIntroduction = $('#desc_text').text().trim()
  let arr = [bookname,author,status,area,publicTime,classify,subscribe,collection,hot,img,briefIntroduction,href]
  // 插入数据库
  let strSql = 'insert into cartoon (bookname,author,status,area,public_time,classify,subscribe,collection,hot,img,brief_introduction,book_url) values (?,?,?,?,?,?,?,?,?,?,?,?)'
  con.query(strSql, arr, (e,res)=>{
    console.log(e)
    console.log(res)
  })
}
// getBookInfo('https://volmoe.com/c/11248.htm')