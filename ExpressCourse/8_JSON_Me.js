const express = require('express');
const fs = require('fs');
const app = express();

app.get('/books', function (req, res) {
	fs.readFile(process.argv[3],'utf8' ,function(err, data) {
		if(err) res.sendStatus(500);
		try {
			books = JSON.parse(data);
		} catch (e) {
			res.sendStatus(500);
		}
		res.json(books);
	});
});


app.listen(process.argv[2], function() {
	console.log('Example app listening on port ' +  process.argv[2]);
});
