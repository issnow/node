/**
 * 1.pipe解决的问题
 * 但这样写还是有一些问题的，如果说写入的速度跟不上读取的速度，
 * 有可能导致数据丢失。正常的情况应该是，写完一段，再读取下一段，
 * 如果没有写完的话，就让读取流先暂停，等写完再继续，所以为了让可
 * 读流和可写流速度一致，就要用到流中必不可少的属性pipe了，pipe
 * 翻译过来意思是管道，顾名思义，就想上面的倒水一样，如果不用一根管
 * 子相连，A桶倒进B桶的水不会均速传输，可能会导致水的浪费，用pipe可
 * 以这样解决上述问题:
 */
let fs = require('fs')

// 创建一个可读流
let rs = fs.createReadStream('hello.txt', {flags: 'r', encoding: 'utf-8'})

// 创建一个可写流
let ws = fs.createWriteStream('my2.txt', {flags: 'w', encoding: 'utf-8'})
​
// 管道读写操作
// 读取 hello.txt 文件内容，并将内容写入到 my2.txt 文件中
rs.pipe(ws)