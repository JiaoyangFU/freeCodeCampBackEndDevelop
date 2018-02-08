
let http = require('http');

http.get(process.argv[2], function(response) {
	// console.log("Got response: " + response.statusCode);
	response.setEncoding("utf8");
	response.on("data", function(data) {
		console.log(data);
	});

}).on('error', function(e) {
	console.log(e.message);
});



/*
Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

var http = require('http')

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8')
	response.on('data', console.log)
	response.on('error', console.error)
}).on('error', console.error)

─────────────────────────────────────────────────────────────────────────────
*/