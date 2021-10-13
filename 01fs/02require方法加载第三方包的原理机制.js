let qs = require('qs')

console.log(qs.parse('a=1'))

/**
 * require方法加载第三方包的原理机制是什么:
 * 1.require('第三方包名')优先在加载该包的模块的同级目录node_modules中查找第三方包。
 * 2.找到该第三方包中的package.json文件，并且找到里面的main属性对应的入口模块，该入口模块即为加载的第三方模块。
 * 3.如果在要加载的第三方包中没有找到package.json文件或者是package.json文件中没有main属性，则默认加载第三方包中的index.js文件。
 * 4.如果在加载第三方模块的文件的同级目录没有找到node_modules文件夹，或者以上所有情况都没有找到，则会向上一级父级目录下查找node_modules文件夹，查找规则如上一致。
 * 5.如果一直找到该模块的磁盘根路径都没有找到，则会报错：can not find module xxx。
 */