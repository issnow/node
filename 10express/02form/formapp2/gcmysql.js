const mysql = require('mysql')
// 连接数据库
const con = mysql.createConnection({
  // port: 
  host: 'localhost',
  user: 'root',
  password: '11223344',
  database: 'mall'
})

con.connect(e=>{
  if(e) {
    throw e
  }else {
    console.log('ok 数据库连接成功')
  }
})
function sqlQuery(strsql, arr) {
  return new Promise((resolve,reject)=>{
    con.query(strsql, arr, (e,res)=>{
      if(e) {
        reject(e)
      }else {
        resolve(res)
      }
    })
  })
}

module.exports = sqlQuery