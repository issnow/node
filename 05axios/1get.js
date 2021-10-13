let axios = require('axios')

// console.log(axios)
let target = 'https://www.dytt8.net/index.htm'
axios.get(target, {
  headers: {
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
  },
}).then(d=>{
  console.log(d)
})