/**
 * 1.教你用puppeteer虚拟浏览器,甚至可以模拟点击事件,键盘输入
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
    },
    // 将 Puppeteer 操作减少指定的毫秒数。这样你就可以看清发生了什么，这很有用
    slowMo:250
  }
  const browser = await puppeteer.launch(options);
  // 打开新页面
  const page = await browser.newPage()
  // 访问页面
  // await page.goto('https://www.baidu.com')
  // await page.goto('https://www.dytt8.net/index.htm')
  await page.goto('https://www.iqiyi.com/')
  // let elehandles = await page.$$('.page-wrap .qy-index-page #block-C .nav-list-item > div > a')
  // 通过点击页面跳转
  // await elehandles[3].click()

  // 2.通过输入表单点击跳转
  let OInput = await page.$('#J-header-search-input')
  let clickBtn = await page.$('#J-search-btn')
  // 1).鼠标聚焦
  await OInput.focus() 
  // 2).输入海贼王
  await page.keyboard.type('海贼王')
  // 3).点击搜索
  await clickBtn.click()

  /**
   * 1.Mouse 类在相对于视口左上角的主框架 CSS 像素中运行。
   * - 使用 ‘page.mouse’ 追踪 100x100 的矩形。
   */
  // await page.mouse.move(0, 0);
  // await page.mouse.down();
  // await page.mouse.move(0, 100);
  // await page.mouse.move(100, 100);
  // await page.mouse.move(100, 0);
  // await page.mouse.move(0, 0);
  // await page.mouse.up();
  const page2 = await browser.newPage()
  await page2.goto('https://www.baidu.com/')
  let searchEle =await page2.$('#kw')
  await searchEle.focus()
  await page2.keyboard.type('芜湖起飞~')
  let clickele = await page2.$('#su')
  await clickele.click()
}

test()