var express = require('express');
var router = express.Router();
var readpage = require('../views/read/readpage.js');
var listpage = require('../views/read/listpage.js');
var editpage = require('../views/updatewrite.js');
var auth = require('../lib/auth');

var options={
  host     : 'localhost', //host는 db서버의 위치
  user     : 'root',
  password : '',
  database : 'text'
};
var mysql      = require('mysql');
var connection = mysql.createConnection(options);
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
    db.query('SELECT * FROM text', function (error, results, fields) {
            if(error) throw error;
            var html = listpage.HTML(results);
            res.send(html);
    });
});

router.get('/list/page/',function(req,res){
    db.query('SELECT * FROM text', function (error, results, fields) {
            if(error) throw error;
            var html = listpage.page(results, req.query.num);
            res.send(html);
    });
});

    

router.get('/page/',function(req,res){
    db.query("SELECT title, text, id, views, date_format(date, '%Y/%m/%d/%H:%i') as date_time FROM text WHERE id=?",[req.query.num],function (error, results, fields) {     
      results[0].views+=1;
      db.query('UPDATE text SET views=? WHERE id=?',[results[0].views, req.query.num],function (error, result, fields) {
        db.query("SELECT id, num, author, comment, date_format(date, '%Y/%m/%d/%H:%i') as date_time FROM comment WHERE num=?",[req.query.num], function (error, result2, fields) {
          if(error) throw error;
          var html = readpage.HTML(results[0].title, results[0].text, results[0].id, results[0].date_time, results[0].views, req.query.num, result2);
          res.send(html);
        });
      });
    });
});

router.post('/commentDelete',function(req,res){
  db.query('DELETE FROM comment WHERE id=?',[req.body.id],function (error, result1) {    
           console.log(req.body);
           res.redirect(`/read/page/?num=${req.body.num}`);
  });
});

router.post('/commentProcess',function(req,res){
  db.query('INSERT INTO comment(num, author, comment, date) VALUES(?, ?,?,now())',[parseInt(req.body.pageNum), auth.statusUI(req, res), req.body.comment], function(error, results) {       
      if(error) throw error;
      res.redirect(`/read/page/?num=${parseInt(req.body.pageNum)}`);
    });
});

router.post('/editPage',function(req,res){
  db.query('SELECT * FROM text WHERE id=?',[req.body.num],function (error, results, fields) {  
      if(results[0].author !== auth.statusUI(req, res)){
        res.send('<script type="text/javascript">alert("You are not author"); document.location.href="/read/list"</script>');
      }else{
        var html = editpage.HTML(results[0].title, results[0].text, results[0].id);
        res.send(html);
      }
      if(error) throw error;
    });
});

router.post('/editProcess',function(req,res){
  db.query('UPDATE text SET title=?, text=?  WHERE id=?',[req.body.title, req.body.text, req.body.id], function(error, results) {       
      if(error) throw error;
      res.redirect(`/read/page/?num=${req.body.id}`);
    });
});

router.post('/delete',function(req,res){
  db.query('SELECT * FROM text WHERE id=?',[req.body.num],function (error, results, fields) {   
      if(results[0].author !== auth.statusUI(req, res)){
        res.send('<script type="text/javascript">alert("You are not author"); document.location.href="/read/list"</script>');
      }
      else{
        db.query('DELETE FROM text WHERE id=?',[req.body.num],function (error, result1) {    
           res.redirect('/read/list');
        });
      }
      if(error) throw error;
  });
});

module.exports = router;
