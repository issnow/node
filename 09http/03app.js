/**
 * 1.教你服务端渲染前端页面,前后端没分离,模板引擎
 */
let App_ = require('./02gcApp')
let fs = require('fs')
let app = new App_()
app.staticDir = '/abc'
app.on('/', (req,res)=>{
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end('<h1>首页</h1><img src="./abc/lufei.jpeg" />')
})
app.on('/gnxw', (req,res)=>{
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if(req.pathObj.base === 'index') {
    res.end('<h1>这是国内新闻</h1>')
  }else {
    res.end('<h1>这是国内新闻的其他页面</h1>')
  }
})
app.on('/movies',(req,res)=>{
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  let movies = [
    {
      name: '蒙太奇',
      brief: '5年前，名叫西珍的小女孩遭人绑架杀害，重案组警官吴青浩（金相庆 饰）虽答应西珍母亲（严正花 饰）一定将凶手绳之以法，无奈经过漫长的追查却始终一无所获。眼看追诉期将近，吴警官孤注一掷，结果与嫌疑人对面错过。在此之后，吴警官抱着遗憾离开警队，过起破罐破摔的颓废生活。而西珍妈妈始终不曾放弃追凶的信念，她凭借柔弱女子之躯展开独立调查，终于发现罪犯留下的蛛丝马迹。未过多久，又有一名小女孩在光天化日之下遭人绑架，其作案手法与西珍案件如出一辙，警方旋即布下天罗地网，与之展开周旋。而面对狡猾多端的嫌犯，警方只得再次请出闲赋家中的吴青浩',
      auth: '金相庆',
      list: ['小明', '蔡徐坤', 'TFBOYS']
    },{
      name: '我们爱过吗',
      brief: '该剧讲述当了14年未婚妈妈的女主与虽然坏但吸引人、虽然吝啬却厉害、虽然可怕但性感、虽然年轻但令人心动的四个男人展开一场多角关系的浪漫爱情故事。',
      auth: '宋智孝'
    }
  ]
  let index = req.pathObj.base
  res.render(movies[index], './template/index.html') 
 })
app.run(80,()=>{
  console.log('ok, 起飞')
})

