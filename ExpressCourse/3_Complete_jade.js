const express = require('express');
const app = express();

// View engine setup
app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/home', function(req, res) {
	res.render('index', {date: (new Date()).toDateString()});
});

app.listen(process.argv[2], function() {
	console.log('Example app listening on port ' +  process.argv[2]);
});


/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────

 var express = require('express')
 var app = express()
 app.set('view engine', 'jade')
 app.set('views', process.argv[3])
 app.get('/home', function(req, res) {
 res.render('index', {date: new Date().toDateString()})
 })
 app.listen(process.argv[2])

 ────────────────────────────────────────────────────────────────────────────────
 */