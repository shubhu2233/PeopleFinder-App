var express = require("express");
var path = require("path");
var cors = require('cors')

var app = express();

app.use(cors());

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/aboutdata', function (req, res) {
  res.sendFile(path.normalize(__dirname + '/src/js/data/aboutData.json'));
})


app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
 