## 教你上传npm包
+ 1.创建一个文件夹
+ 2.npm初始化 npm init -y
+ 3.npm包信息的设置
```js
{
  "name": "gcfs",
  "version": "1.0.0",
  "description": "将原生的fs模块,进行promise封装,可以快速使用",
  "main": "gcfs.js",
  "scripts": {
    "test": "echo \"Error: no  test specified\" && exit 1"
  },
  "keywords": [],
  "author": "issnow",
  "license": "ISC"
}
```
+ 4.注册npm账号,并邮箱验证
+ 5.本机登录npm 
```
  npm login
```
6.发布包
```
  npm publish
```
