var express = require("express");
var app = express();

app.listen(3001, function () {
  console.log("Dev app listening on port 3001!");
});

app.get("/", function (req, res) {
  res.send("Hello Dev!");
});

app.get("/dev", function (req, res) {
  res.send("Hello, you are now on the Dev route!");
});
