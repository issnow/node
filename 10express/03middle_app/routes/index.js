var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/data', (req,res)=>{
  res.json({name: '刘小夕'})
})
module.exports = router;
