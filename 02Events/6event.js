const EE = require('events');

let ee = new EE()

function fn(a) {
  console.log(a)
}
ee.on('aaa', fn)

ee.emit('aaa', 123)

ee.removeListener('aaa', fn)

ee.emit('aaa', 34)