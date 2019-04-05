// set up ======================================================================
// get all the tools we need

//check through and verify each
// var connect      = require('connect');
var path         = require('path');
var express      = require('express');
var app          = express();
var port         = process.env.PORT || 3000;




// require('./app/routes.js')(app);

app.use(express.static(path.join(__dirname + '/views/'))); // relative path to serve static files

app.get('/', function (req, res) {
	res.sendFile('index.html', {root: './views'});
});



app.listen(3000, function(){
    console.log('Server running on 3000...');
});


// configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database