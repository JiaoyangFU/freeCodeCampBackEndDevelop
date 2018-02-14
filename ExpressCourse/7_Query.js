const express = require('express');
const app = express();

app.get('/search', function (req, res) {
	var query = req.query;
	console.log(query);
	res.send(query);
});


app.listen(process.argv[2], function() {
	console.log('Example app listening on port ' +  process.argv[2]);
});

