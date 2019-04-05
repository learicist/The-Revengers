// set up ======================================================================
// get all the tools we need

//check through and verify each
// var connect      = require('connect');
var express      = require('express');
var app          = express();
var port         = process.env.PORT || 3000;



// require('./app/routes.js')(app);

app.get('/', function (req, res) {
	res.send('Hello World');
});


app.listen(3000, function(){
    console.log('Server running on 3000...');
});


// configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database