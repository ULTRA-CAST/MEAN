//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
mongoose.Promise = global.Promise;

//Config
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "ferrets",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

//Database
mongoose.connect("mongodb://localhost/ferret_dashboard");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(1337, function(){
    console.log("Listening on port: 1337");
})