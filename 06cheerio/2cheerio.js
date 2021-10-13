/**
 * 1.反爬虫策略
 * 2.使用代理爬虫
 */

const axios = require('axios')

let httpUrl = 'https://www.doutula.com/article/list/?page=1'
axios
  .get(httpUrl, {
    // proxy: {
    //   host: '60.188.1.27',
    //   port: 3000,
    // },
  })
  .then(({ data }) => {
    console.log(data)
  })
