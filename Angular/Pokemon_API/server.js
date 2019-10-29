//Imports
var express = require("express");
var app = express();

//Config
app.use(express.static(__dirname + "/public/dist/public"));

//Port
app.listen(1337, function(){
    console.log("Listening on port: 1337");
})