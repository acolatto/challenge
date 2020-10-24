var express = require("express");
var app = express();
var uuid = require("node-uuid");
var logger = require("morgan");

app.use(logger("dev"));

const PORT = 8080
const HOST = '0.0.0.0';

// Routes
app.get("/api/status", function(req, res) {
  res.status(200).json({
    message: "OK"
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
app.listen(PORT, HOST);
console.log(`Connected -> ${HOST}:${PORT}`)
