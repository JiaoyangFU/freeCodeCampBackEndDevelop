var http = require('http');

http.createServer(function (req, res) {
	let body = [];

	req.on('error', function (err) {
		console.error(err);
		res.statusCode = 400;
		res.end();
	}).on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString().toUpperCase();
		console.log(body);
		if(req.method !== 'POST') {
			return res.end("please send POST! \n");
		}
		else {
			res.end(body);
		}
	});

	res.on('error', function(err) {
		console.error(err);
	});

}).listen(process.argv[2]);


/*
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
	if (req.method !== 'POST') {
		return res.end('send me a POST\n')
	}

	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})

server.listen(Number(process.argv[2]))

 ─────────────────────────────────────────────────────────────────────────────
 */