
//Imports
var express = require("express");
var app = express();
var server = app.listen(1337);
var io = require("socket.io")(server);
var color = "";

//Config
app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Sockets
io.on("connection", function(socket){
    console.log("Connected!");
    socket.emit("launch", {
        bgc : color
    });
    socket.broadcast.emit("launch", {
        bgc : color
    });

    socket.on("green_push", function(){
        socket.emit("green_bg");
        socket.broadcast.emit("green_bg");
        color = "green"
    });
    socket.on("blue_push", function(){
        socket.emit("blue_bg");
        socket.broadcast.emit("blue_bg");
        color = "blue"
    });
    socket.on("red_push", function(){
        socket.emit("red_bg");
        socket.broadcast.emit("red_bg");
        color = "red"
    });
});

//Routes
app.get("/", function(req, res){
    console.log("~Root~");
    res.render("index");
});