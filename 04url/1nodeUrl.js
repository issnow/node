let url = require('url')
let str = 'https://www.mi.com/buy/detail#abc?product_id=10000213'


// 1.url.parse解析
// console.log(url.parse(str))
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.mi.com',
//   port: null,
//   hostname: 'www.mi.com',
//   hash: '#abc?product_id=10000213',
//   search: null,
//   query: null,
//   pathname: '/buy/detail',
//   path: '/buy/detail',
//   href: 'https://www.mi.com/buy/detail#abc?product_id=10000213'
// }

// 2.url.resolve 拼接
let targetUrl = 'http://www.taobao.com'
let path = 'gc/home/pc'
let res = url.resolve(targetUrl, path)

console.log(res, 'res') //http://www.taobao.com/gc/home/pc
