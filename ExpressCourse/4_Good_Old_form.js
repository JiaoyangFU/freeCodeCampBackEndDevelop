
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
	res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2], function() {
	console.log('Example app listening on port ' +  process.argv[2]);
});



/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────


 var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
	res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])

 ────────────────────────────────────────────────────────────────────────────────
 */