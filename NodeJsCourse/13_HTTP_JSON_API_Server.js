let http = require('http');
let url = require('url');


function parseTime(time) {
	return {
		"hour": time.getHours(),
		"minute": time.getMinutes(),
		"second": time.getSeconds()
	};
}

function unixtime (time) {
	return {
		"unixtime": time.getTime()
	};
}

http.createServer(function (req, res) {
	req.on('error', function (err) {
		console.error(err);
		res.statusCode = 400;
		res.end();
	});

	res.on('error', function(err) {
		console.error(err);
	});

	let q = url.parse(req.url, true);
	let pathName = q.pathname;
	let time = new Date(q.query.iso);
	let result = null;

	if ("/api/parsetime" === pathName) {
		result = parseTime(time);
	}
	else if ("/api/unixtime" === pathName) {
		result = unixtime(time);
	}

	if (result) {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(result));
	}
	else {
		res.statusCode = 404;
		res.end();
	}

}).listen(process.argv[2]);

console.log("server is listening to port: " + process.argv[2]);


/*
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

const http = require('http')
const url = require('url')

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixtime (time) {
	return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
	const parsedUrl = url.parse(req.url, true)
	const time = new Date(parsedUrl.query.iso)
	let result

	if (/^\/api\/parsetime/.test(req.url)) {
		result = parsetime(time)
	} else if (/^\/api\/unixtime/.test(req.url)) {
		result = unixtime(time)
	}

	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})
server.listen(Number(process.argv[2]))

 ─────────────────────────────────────────────────────────────────────────────
 */