var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require('request');

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render('home');
});


const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log("Listening on ${ PORT }");
});
