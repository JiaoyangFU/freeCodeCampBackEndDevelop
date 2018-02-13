const express = require('express');
const app = express();


app.get('/home', function(req, res) {
	res.send("Hello World!"); // res.end("Hello World!");
});

app.listen(process.argv[2], function() {
	console.log('Example app listening on port' +  process.argv[2]);
});