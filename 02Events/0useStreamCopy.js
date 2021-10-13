var fs = require('fs');
var readStream = fs.createReadStream('a.mp4'); // 创建可读流
var writeStream = fs.createWriteStream('b.mp4'); // 创建可写流

readStream.on('data', function(chunk) { // 当有数据流出时，写入数据
    writeStream.write(chunk);
});

readStream.on('end', function() { // 当没有数据时，关闭数据流
    writeStream.end();
});