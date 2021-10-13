let axios = require('axios')
axios.get('https://www.dytt8.net/index.htm').then(({data})=>{
  console.log(data)
})