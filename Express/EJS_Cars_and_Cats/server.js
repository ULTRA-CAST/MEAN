var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/Views");
app.set("view engine", "ejs");

app.get("/cars", function(request, response){
    response.render("cars");
})
app.get("/cats", function(request, response){
    response.render("cats");
})
app.get("/form", function(request, response){
    response.render("form");
})

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})