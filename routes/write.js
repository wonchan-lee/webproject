var express = require('express');
var router = express.Router();
var writepage = require('../views/writepage.js');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //host는 db서버의 위치
  user     : 'root',
  password : '',
  database : 'text'
});
connection.connect();
var db = connection;


/* GET home page. */


router.get('/',function(req,res){
  var html = writepage.HTML();
  res.send(html);
})


 router.post('/process',function(req,res){
      db.query(`INSERT INTO text(title, text) VALUES(?,?)`
                           ,[req.body.title,req.body.text],function(error, result){
      if(error) throw error;
      res.redirect('/');
      });
});
module.exports = router;
