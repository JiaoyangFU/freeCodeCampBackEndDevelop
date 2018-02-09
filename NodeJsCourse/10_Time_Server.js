let net = require("net");

let server = net.createServer(function(socket) {
	socket.end(timestamp() + "\n");
});

server.listen(Number(process.argv[2]));

function zeroFill (t) {
	return (t < 10 ? '0' : '') + t;
}

function timestamp() {
	// "YYYY-MM-DD hh:mm"
	let date = new Date();
	return date.getFullYear() + "-" +
		zeroFill(date.getMonth() + 1) + "-" +   // starts at 0
		zeroFill(date.getDate()) + " "  +   // returns the day of month
		zeroFill(date.getHours()) + ":" +
		zeroFill(date.getMinutes());
}