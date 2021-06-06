// var user = require('./user.js');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //host는 db서버의 위치
  user     : 'root',
  password : '',
  database : 'email'
});
connection.connect();


module.exports = function (app) {
    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            session: true
        },
        function (username, password, done) {
            connection.query('SELECT * FROM test', function (error, results, fields) {
                  // topic의 열들을 console에 출력함
                  if (error) { 
                      console.log(error);
                  }
                  var i=0;
                  while(i<results.length){
                    var email = results[i].email;
                    var passwords= results[i].password;
                           if (username === email) {
                                  if (password === passwords) {
                                    
                                    passport.serializeUser(function (user, done) {
                                        done(null, user.email);
                                    });
                                    passport.deserializeUser(function (id, done) {
                                        done(null, results[i]);
                                    });

                                      return done(null, results[i], {
                                          message: 'Welcome.'
                                      });
                                  } 
                         
                          }
                           i++;
                  }
                 return done(null, false, {
                        message: 'login failed'
                  });
              });
        }
    ));
    return passport;
}