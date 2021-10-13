/**
 * 教你怎么爬虫
 * 1.获取起始页面的所有分类地址
 * 2.获取分类里的电影链接
 * 3.根据电影链接获取电影的详细信息
 */
let request = require('request')
let axios = require('axios')
let url = 'https://www.1905.com/vod/list/n_1/o3u1p1.html'
let fs = require('fs')
let {fsRead, fsWrite,fsDir} = require('./utils')

async function getData() {
  axios.get(url).then(res=>{
    // console.log(res.data)
    let reg = /<span class="search-index-L">类型 :<\/span>(.*?)<div class="grid-12x">/igs
    let fragment = reg.exec(res.data)[1]
    // console.log(fragment)
    let classArr = []
    let reg2 = /<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;" >(.*?)<\/a>/igs
    while(info = reg2.exec(fragment)) {
      classArr.push({
        className: info[2],
        url: info[1]
      })
      // fsDir('./movies/'+info[2]).then(()=>{
        if(info) {
          getFilm(info[1], info[2])
        }
      // })
    }
    // console.log(classArr, 'res')
  })
}
getData()

// 通过分类获取电影链接
// <a class="pic-pack-outer" target="_blank" href="https://www.1905.com/vod/play/85340.shtml" title="我和姐姐"><img alt="我和姐姐" src="https://image11.m1905.cn/uploadfile/2019/0306/thumb_1_150_203_20190306091721473398.jpg"><h3>我和姐姐</h3><i class="score"><b>5</b>.9</i><p>青春故事纯真年代</p></a>
async function getFilm(url, type) {
  let {data} = await axios.get(url)
  let reg = /<a class="pic-pack-outer" target="_blank" href="(.*?)".*?><img/igs
  let res,arrList = []
  while(res = reg.exec(data)) {
    // 改进
    arrList.push(res[1])
    parsePage(res[1],type)
  }
  // console.log(`分类${type}`)
  // console.log(arrList)
}

async function parsePage (url,type) {
  let {data} = await axios.get(url)
  let reg = /<h1 class="playerBox-info-name playerBox-info-cnName">(.*?)<\/h1>.*?<span id="playerBoxIntroCon">(.*?)<a href=.*?data-hrefexp="fr=vodplay_ypzl_dy">(.*?)/igs
  let res = reg.exec(data)
  // console.log(res[1])
  let movie = {
    name: res[1],
    desc: res[2],
    director: res[3],
    url,
    type
  }
  // console.log(movie)
  fsWrite(`./movies/${type}/${res[1]}.json`, JSON.stringify(movie))
}





