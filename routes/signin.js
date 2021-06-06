var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //host는 db서버의 위치
  user     : 'root',
  password : '',
  database : 'email'
});
connection.connect();
var db = connection;


router.post('/',function(req,res){
     db.query('SELECT * FROM test', function (error, results, fields) {
       if(error) throw error;
       var i=0;
       var checkId = false;
       while(i<results.length){
         if(results[i].email === req.body.email){
           checkId = true;
         }
         i++;
       }
       if(checkId){
         res.send('<script type="text/javascript">alert("email overlap"); document.location.href="/login/signin"</script>');
       }else{
           db.query(`INSERT INTO test(email, password, nickname) VALUES(?,?,?)`
                             ,[req.body.email,req.body.password, req.body.nickname],function(error, result){
            if(error) throw error;
            res.redirect('/');
          });
       }
     });
 });

module.exports = router;