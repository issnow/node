let {read,write} = require('gcfs')

async function dothings() {
  await write('./hello.txt', '医院是真的坑爹\n')
  await write('./hello.txt', '可不咋地\n')
}
dothings()