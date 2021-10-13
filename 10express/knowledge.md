### 安装

```
yarn add express 
```

```
sudo npm install -g express-generator
```

### 创建一个express应用,并使用ejs模板引擎

```
express --view=ejs app
```

#### 使用express命令快读创建一个目录

```
express app -e
cd app
yarn
DEBUG=app:* npm start     //启动
```

### res对象

```javascript
app.get('/', (req,res)=>{
  res.send('hello world')
  res.json()// 可以返回一个json数据
})
```

### 使用nodemon启动执行nodejs文件,有改动自动监听

+ nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

  ```
  nodemon [your node app]
  ```

  