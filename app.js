var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');
var catRouter = require('./routes/cat'); // Ensure this file exists
var dogRouter = require('./routes/dog');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register routes BEFORE error handling
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);
app.use('/cat', catRouter); // Ensure this is correctly registered
app.use('/dog', dogRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log('Server running on port 30180'));

module.exports = app;
