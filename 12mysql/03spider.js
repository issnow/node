/*
 * @Author: snow
 * @Date: 2021-10-03 22:23:09
 * @Description: sobooks网页爬虫
 */
const mysql = require('mysql');
const cheerio = require('cheerio');
const axios = require('axios');

let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '11223344',
  database: 'book'
})
con.connect()

/**
 * @description: 开始爬虫
 * @param {*}
 * @return {*}
 */
let getBook = async ()=>{
  for(var i = 1;i < 30; i++) {
    getPageUrl(i)
    await wait()
  }
}
getBook()

/**
 * @description: 获取第n个页面书的连接
 * @param {number} num 表示第几个页面
 * @return {*}
 */
async function getPageUrl (num) {
  let {
    data
  } = await axios.get(`https://sobooks.cc/page/${num}`)
  let $ = cheerio.load(data)
  $('#cardslist .card-item .thumb-img>a').each((i, e) => {
    let href = $(e).attr('href')
    // 根据地址访问详情页
    getBookDetail(href)
  })
}
/**
 * @description: 获取每一个书的详情
 * @param {*} href 地址
 * @return {*}
 */
async function getBookDetail(href) {
  let {
    data
  } = await axios.get(href)
  let $ = cheerio.load(data)
  // 图片地址
  let bookimg = $('.book-info .bookpic>img').attr('src')
  // 书名
  let bookname = $('div.bookinfo ul li').eq(0).text().slice(3)
  // 作者
  let author = $('div.bookinfo ul li').eq(1).text().slice(3)
  // 标签
  let tag = $('div.bookinfo ul li').eq(3).text().slice(3)
  // 出版时间
  let pubtime = $('div.bookinfo ul li').eq(4).text().slice(3)
  // 评分
  let score = $('div.bookinfo ul li').find('b').attr('class').slice(9)

  // 分类
  let category = $('#mute-category>a').text().trim()

  // 内容简介
  let bbrief = $('body > section > div.content-wrap > div > article > p:nth-child(3)').text()
  // 作者简介
  let abrief = $('body > section > div.content-wrap > div > article > p:nth-child(5)').text()
  let viewcount = parseInt(Math.random() * 10000)
  let arr = [bookname, author, viewcount,tag, pubtime, score, bookimg, category, abrief, bbrief]
  let str = 'insert into book (bookname, author, viewcount,tag, pubtime,score,bookimg,category,abrief,bbrief) values (?,?,?,?,?,?,?,?,?,?)'
  con.query(str, arr, (e, res) => {
    console.log(e)
    console.log(res)
  })
}

// getPageUrl(page)
// getBookDetail('https://sobooks.cc/books/18866.html')

async function wait() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve()
    }, 2000);
  })
}