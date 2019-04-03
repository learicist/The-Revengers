// set up ======================================================================
// get all the tools we need

//check through and verify each

var express      = require('express');
var app          = express();
var port         = process.env.PORT || 3000;
var path         = require('path');
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var favicon      = require('serve-favicon');
var busboy       = require('connect-busboy');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var configDB     = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database