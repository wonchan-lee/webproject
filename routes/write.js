var express = require('express');
var router = express.Router();
var writepage = require('../views/writepage.js');
var auth = require('../lib/auth');
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
  console.log(auth.isOwner(req, res));
  if(auth.isOwner(req, res) === false){
    res.send('<script type="text/javascript">alert("please login"); document.location.href="/"</script>');
  }else{
    var html = writepage.HTML();
    res.send(html);
  }
})


 router.post('/process',function(req,res){
      db.query(`INSERT INTO text(title, text, author, date) VALUES(?,?,?,now())`
                           ,[req.body.title,req.body.text,auth.statusUI(req,res)],function(error, result){
      if(error) throw error;
      res.redirect('/');
      });
});
module.exports = router;
