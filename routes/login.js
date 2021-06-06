var express = require('express');
var router = express.Router();
var loginpage = require('../views/loginpage.js');
var signinpage = require('../views/signinpage.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */


router.get('/',function(req,res){
   var fmsg = req.flash();
    var feedback = '';
    if (fmsg.err) {
      feedback = fmsg.error[0];
    }
  var html = loginpage.HTML(feedback);
  res.send(html);
})


router.post('/auth', passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login/',
      failureFlash: true,
      successFlash: true
    })
);

router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/');
    });

});

router.get('/signin', function(req, res){
   var html = signinpage.HTML();
   res.send(html);
});

module.exports = router;
