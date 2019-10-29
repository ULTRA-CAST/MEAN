var express = require("express");
var app = express();
var server = app.listen(1337);
var io = require("socket.io")(server);


//Use
app.use(express.static(__dirname + "/static"));

//Set
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on('connection', function (socket) {
    console.log("Connected!");
	socket.on("posting_form", function (data){
        var num = Math.floor(Math.random()*1000);
        var object = JSON.stringify(data);
    	socket.emit('updated_message', {
            info: `The data sent via form is: ${object}.`
        });
        socket.emit('random_number', {
            message:`Your lucky emmitted number is: ${num}!`
        });
    });
});

//Get
app.get("/", function(req, res){
    console.log('~Root~');
    res.render("index");
})