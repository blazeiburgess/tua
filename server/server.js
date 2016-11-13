var express = require("express");
var path = require("path");
var prt = 7777;

var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.listen(prt, function ()  {
  console.log("Started listening on port", prt);
})
