var express = require('express');
var router = express.Router();
var readpage = require('../views/read/readpage.js');
var listpage = require('../views/read/listpage.js');
var editpage = require('../views/updatewrite.js')

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //host는 db서버의 위치
  user     : 'root',
  password : '',
  database : 'text'
});
connection.connect();
var db = connection;


db.query('SELECT * FROM text WHERE id=1', function (error, results, fields) {
    router.get('/',function(req,res){
        if(error) throw error;
        var html = readpage.HTML(results[0].title, results[0].text);
        res.send(html);
    });
});


router.get('/list',function(req,res){
    db.query('SELECT id, title FROM text', function (error, results, fields) {
            if(error) throw error;
            var html = listpage.HTML(results);
            res.send(html);
    });
});
    

router.get('/page/',function(req,res){
    db.query('SELECT * FROM text WHERE id=?',[req.query.num],function (error, results, fields) {       
      if(error) throw error;
      var html = readpage.HTML(results[0].title, results[0].text, results[0].id);
      res.send(html);
    });
});

router.post('/editPage',function(req,res){
  db.query('SELECT * FROM text WHERE id=?',[req.body.num],function (error, results, fields) {       
      if(error) throw error;
      var html = editpage.HTML(results[0].title, results[0].text, results[0].id);
      res.send(html);
    });
});

router.post('/editProcess',function(req,res){
  console.log(req.body);
  db.query('UPDATE text SET title=?, text=?  WHERE id=?',[req.body.title, req.body.text, req.body.id], function(error, results) {       
      if(error) throw error;
      res.redirect(`/read/page/?num=${req.body.id}`);
    });
});

router.post('/delete',function(req,res){
  db.query('DELETE FROM text WHERE id=?',[req.body.num],function (error, results) {       
    if(error) throw error;
    res.redirect('/read/list')
    });
});

module.exports = router;
