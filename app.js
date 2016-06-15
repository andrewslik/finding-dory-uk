var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');
var expressValidator = require('express-validator');

var routes = require('./app/server/routes/index');
var api = require('./app/server/routes/api');
var entry = require('./app/server/routes/entry');

var app = express();

var mongoconfig = require('./app/server/config/mongodb.js');
mongoose.connect(mongoconfig.url);

// view engine setup
nunjucks.configure('./app/server/views', {
    autoescape: true,
    express: app
});
app.set('views', path.join(__dirname, '/app/server/views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(expressValidator([]));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './app/public/build')));

app.use('/', routes);
app.use('/api', api);
app.use('/api/entry', entry);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;