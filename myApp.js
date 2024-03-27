let express = require('express');
let app = express();

console.log("Hello World")

app.get("/", function(req, res) {
  res.send("Hello World")
})

module.exports = app;
