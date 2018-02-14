const express = require('express');
const app = express();

app.put('/message/:id', function (req, res) {
	let id = req.params.id;
	let hash = require('crypto')
		.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex');
	res.end(hash);
});


app.listen(process.argv[2], function() {
	console.log('Example app listening on port ' +  process.argv[2]);
});


