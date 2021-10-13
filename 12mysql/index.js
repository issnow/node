const mysql = require('mysql');

let option = {
  host: 'localhost',
  // port: '3306',
  user: 'root',
  password: '11223344',
  database: 'mall'
}
let con = mysql.createConnection(option)
con.connect(e=>{
  if(e) {
    console.log(e)
  }else {
    console.log('数据库连接成功')
  }
})
// let str = 'select * from user'
// con.query(str,(e,res,fields)=>{
//   if(e) {
//     console.log(e)
//   }else {
//     console.log(res)
//     console.log(fields)
//   }
// })

// let str = 'drop table user'
// con.query(str, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// let str = 'drop database testdb'
// con.query(str, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// let str = `CREATE TABLE user  (
//   id int NOT NULL AUTO_INCREMENT,
//   username varchar(255) NULL,
//   password varchar(255) NULL,
//   mail varchar(255) NULL,
//   PRIMARY KEY (id)
// );`

// con.query(str, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// let str = 'insert into user (id, username, password) values (1, "guocheng", 123456)'
let str = 'insert into user(username, password, mail) values(?,?,?)'
con.query(str,['xiaoming',123123, 'snow@163.com'], (e, res)=>{
  console.log(e)
  console.log(res)
})
con.end()