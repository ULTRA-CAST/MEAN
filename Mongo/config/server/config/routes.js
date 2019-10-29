app.get('/', function (req, res) {
    Quote.find({}, function (err, data){
        if(err){
        // handle error, send response
        }
        else {
       	// handle data, send response 
        }
    })
})

app.get('/', function(req, res){
    quotes.index(req, res);
})
