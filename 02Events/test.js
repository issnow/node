let fs = require('fs')

let ws = fs.createWriteStream('hello2.txt')

let rs = fs.createReadStream('./hello.txt', {encoding: 'utf-8'})

rs.pipe(ws)