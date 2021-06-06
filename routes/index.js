var express = require('express');
var router = express.Router();
var indexpage = require('../views/indexpage.js');
var auth = require('../lib/auth');
/* GET home page. */

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //host는 db서버의 위치
  user     : 'root',
  password : '',
  database : 'text'
});
connection.connect();
var db = connection;


router.get('/',function(req,res){
    db.query('SELECT * FROM text', function (error, results, fields) {
          var login= auth.statusUI(req,res);
          var html = indexpage.HTML(login, results[0], results[1], auth.isOwner(req,res));
          res.send(html);
    });
});
module.exports = router;
