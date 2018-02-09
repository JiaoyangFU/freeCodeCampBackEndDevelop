let http = require("http");
let fs = require("fs");


var server = http.createServer(function (req, res) {
	res.writeHead(200, {'content-type' : 'text/plain'});
	fs.createReadStream(process.argv[3], { autoClose: true}).pipe(res);
});
server.listen(process.argv[2]);