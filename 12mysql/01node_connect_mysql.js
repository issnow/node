/**
 * 教你用node操作数据库,主要是mysql语句
 */
let mysql = require('mysql')
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '12345678',
//   database : 'my_db'
// });
let option = {
  host: 'localhost',
  // port: '3306',端口号默认3306,可不写
  user: 'root',
  password: '11223344',
  database: 'mall'//数据库的名字
}
// 1.创建数据库的连接对象
let con = mysql.createConnection(option)
// 2.建立连接
con.connect(e=>{
  if(e){
    console.log(e)
  }else {
    console.log('数据库连接成功')
  }
})
// 3.执行数据库语句
// 4.执行查询语句
// let str = 'select * from student'// user是表的名字
// #1查询表
// con.query(str, (e,res,fields)=>{
//   if(e) {
//     console.log(e)
//   }else {
//     console.log(res)
//     console.log(fields)
//   }
// })


// 查询某个id,也可以下面这样查,用变量的方式
// let strTem = 'select * from student where id = ?'
// con.query(strTem, [1], (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// #2删除表
// let strSql1 = 'drop table user'// user是表的名字
// con.query(strSql1, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// #3删除库
// let strSql2 = 'drop database people'//people是库的名字
// con.query(strSql2, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })
// #4创建库
// let strSql3 = 'create database mall2'
// con.query(strSql3, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// #5创建表 注意需要指定PRIMARY KEY(id),并且这个primary key NOT NULL
// let strSql4 = `CREATE TABLE table3  (
//   id int NOT NULL AUTO_INCREMENT,
//   username varchar(255) NULL,
//   password varchar(255) NULL,
//   mail varchar(255) NULL,
//   PRIMARY KEY(id)
// );`
// con.query(strSql4, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// #6插入数据
// let strSql5 = 'insert into table3 (id,username,password) values (3,"laocheng","1234567")'
// con.query(strSql5,(e,res)=>{
//   console.log(e)
//   console.log(res)
// })
// let strSql6 = 'insert into table3 (username,password,mail) values ("mingren","55555", "133@qq.com")'
// con.query(strSql6, (e,res)=>{
//   console.log(e)
//   console.log(res)
// })

// let strSql7 = 'insert into table3 (username, password, mail) values (?,?,?)'
// con.query(strSql7, ["zuozhu","17","zuozhu@qq.com",], (e,res)=>{
//   console.log(e)
//   console.log(res)
// })
con.end();