let http = require('http');
let bl = require('bl');

http.createServer(function (req, res) {

	req.on('error', function (err) {
		console.error(err);
		res.statusCode = 400;
		res.end();
	});

	res.on('error', function(err) {
		console.error(err);
	});

	req.pipe(bl(function(err, data) {
		if (err) {
			return console.error(err);
		}
		if(req.method !== 'POST') {
			res.end("please send POST! \n");
		}
		else {
			res.end(data.toString().toUpperCase()) ;
		}
	}));
}).listen(process.argv[2]);

console.log("listening to: " + process.argv[2]);