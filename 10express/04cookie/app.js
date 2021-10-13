var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入session
var session = require('express-session')

// 路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionRouter = require('./routes/session')

var app = express();

// view engine setup
// express 视图设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// express设置的中间件
//配置中间件
// app.use(session({
// 	secret: "keyboard cat",
//   resave: false,
//   saveUninitialized: true,
//   cookie: ('name', 'value',{maxAge:  5*60*1000,secure: false})
// }));

app.use(session({
  // session的配置
  secret: 'gc',//加盐
  cookie: {
    maxAge: 7*24*60*60*1000
  }
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// secret参数的作用,使cookie加密
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));

// 路由匹配
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/session', sessionRouter)

// catch 404 and forward to error handler
// 设置404页面的中间件
app.use(function(req, res, next) {
  res.render('404')
  // next(createError(404));
});

// error handler
// 处理错误的中间件
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
