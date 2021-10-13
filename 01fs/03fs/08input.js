/**
 * 1.教你创建一个package.json文件,哦吼,起飞
 * 
 */
// 引入readline模块
let readline = require('readline')
let {fsWrite} = require('./utils')
//创建readline接口实例
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// question方法
// r1.question('今晚吃什么?',ans=>{
//   console.log('吃'+ans)
  // 不加close，则程序不会结束(哦吼,起飞)
  // r1.close()
// })

// close事件监听
r1.on('close', ()=>{
  // 结束程序
  process.exit(0)
})

function askQuestion(title) {
  return new Promise((resolve,reject)=>{
    r1.question(title,ans=>{
      resolve(ans)
    })
  })
}

async function createPackageJson() {
  let name = await askQuestion('你的包名叫什么?')
  let version = await askQuestion('你的版本是什么?')
  let description = await askQuestion('你的描述是什么?')
  let main = await askQuestion('你的主入口文件是什么?')
  let author = await askQuestion('作者是谁?')
  let content = `{
    "name": "${name}",
    "version": "${version}",
    "description": "${description}",
    "main": "${main}",
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "keywords": [],
    "author": "${author}",
    "license": "ISC",
    "dependencies": {
      "qs": "^6.9.4"
    }
  }`
  await fsWrite('./package.json', content)
  // 写完了,关闭进程
  r1.close()
}

createPackageJson()