let {readdir,rename} = require('./index')

// async function dothing() {
//   let res = await fsmkdir('abc')
//   await fsmkdir('bbb')
//   console.log(res)
//   let res2 = await fsWrite('./gc.txt', 'hello world\n132')
// }
// dothing()
// async function deletesomething() {
//   await fsrmdir('./bbb')
//   await fsUnlink('./gc.txt')

// }
// deletesomething()
async function readlist() {
  // let arr = await readdir('../11npm')
  let arr = await rename('./index.js', 'gcfs.js')
  console.log(arr)
}
readlist()
