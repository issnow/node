/**
 * 1.教你用puppeteer虚拟浏览器
 */

let puppeteer = require('puppeteer')

async function test() {
  /**
   * puppeteer.launch()实例开启浏览器
   * 1.1. 使用无头模式 Puppeteer 运行 Chromium 的headless mode。
   * 如果想要使用完全版本的 Chromium，设置 'headless' option 即可。
   */
  let options = {
    // 设置界面true为无界面
    headless: false,
    // 设置视窗的宽高
    defaultViewport: {
      width: 1440,
      height: 789
    }
  }
  const browser = await puppeteer.launch(options);
  // 打开新页面
  const page = await browser.newPage()
  // 访问页面
  // await page.goto('https://www.baidu.com')
  await page.goto('https://www.dytt8.net/index.htm')
  // screenshot截图
  // await page.screenshot({path: 'screenshot.png'}) 
  // 获取页面的内容

  /**
   * !$$eval可以让函数运行在浏览器中,让浏览器输出 
   */
  let arr = await page.$$eval('#menu li a', (e)=>{
    let eles = []
    e.forEach((c,i)=>{
      if(c.getAttribute('href')!='#') {
        let obj = {
          href: c.getAttribute('href'),
          text: c.innerText
        }
        eles.push(obj)
        console.log(obj)
      }
      
    })
    return eles
  })
  // 浏览器可以监听控制台的输出
  // page.on('console', e=>{
  //   console.log(e.text())
     // alert(e.text())
  // })
  console.log(arr)
  let gnPage = await browser.newPage()
  await gnPage.goto(arr[2].href)
}

test()