var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var demo   = require('./routes/demo');
var ex1   = require('./routes/ex-1');
var ex2   = require('./routes/ex-2');
var ex3   = require('./routes/ex-3');
var ex4   = require('./routes/ex-4');
var ex5   = require('./routes/ex-5');
var ex6   = require('./routes/ex-6');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/demo', demo);
app.use('/ex-1', ex1);
app.use('/ex-2', ex2);
app.use('/ex-3', ex3);
app.use('/ex-4', ex4);
app.use('/ex-5', ex5);
app.use('/ex-6', ex6);

app.use('/assets/jsoneditor', express.static(__dirname + '/node_modules/jsoneditor/dist/'));
app.use('/assets/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/assets/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/assets/jquery-cookie', express.static(__dirname + '/node_modules/jquery.cookie/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
