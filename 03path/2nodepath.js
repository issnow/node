let path = require('path')

/**
 * 1.__dirname 获取当前文件的目录的绝对路径
 * 2.__filename 获取当前文件的绝对路径
 * 3.path.extname() 文件后缀名
 * 4.path.parse() 方法会返回一个对象，其属性表示 path 的有效元素
 */

 console.log(__filename)

 console.log(path.extname(__filename))

 console.log(path.parse(__filename))
 /* -->
 {
  root: '/',根路径
  dir: '/Users/snow/Desktop/app/node/node-demo/03path',目录
  base: '2nodepath.js',文件名称
  ext: '.js',扩展名
  name: '2nodepath'文件名
}
 */