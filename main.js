const express = require('express');
const app = express()
const path = require('path');
var indexRouter = require('./routes/index.js');
var loginRouter = require('./routes/login.js');
var signinRouter = require('./routes/signin.js');
var writeRouter = require('./routes/write.js');
var readRouter = require('./routes/read.js');

var bodyParser = require('body-parser');
var router = express.Router();
//
var bodyParser = require('body-parser');
var compression = require('compression');
var session = require('express-session');
var flash = require('connect-flash');


app.use(express.static(path.join(__dirname, 'www')));
app.engine('html', require('ejs').renderFile);

//PayloadTooLargeError: request entity too large 에러 해결
app.use(express.json({ limit : "50mb" }));
app.use(express.urlencoded({ limit:"50mb", extended: false }));

app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(compression());



app.use(session({
  secret: 'asadlfkj!@#!@#dfgasdg',
  resave: true,
  saveUninitialized: true
}))
app.use(flash());
var passport = require('./lib/passport')(app);

//css파일 처리
app.use('/', express.static('public'));
app.use('/login', express.static('public'));
app.use('/read/list', express.static('assets'));


//
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signin_process', signinRouter);
app.use('/write', writeRouter);
app.use('/read', readRouter);
//+




app.listen(8000)

