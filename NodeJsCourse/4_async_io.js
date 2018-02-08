
fs = require('fs');
function asyncReadFile (callback) {
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
		callback(fileContents);
	})
}

function printLines (buffer) {
	let lines = buffer.toString().split('\n').length - 1;
	console.log(lines);
}

asyncReadFile(printLines);


/*
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

 var fs = require('fs')
 var file = process.argv[2]

 fs.readFile(file, function (err, contents) {
 if (err) {
 return console.log(err)
 }

 // fs.readFile(file, 'utf8', callback) can also be used
 var lines = contents.toString().split('\n').length - 1
 console.log(lines)
 })

 ─────────────────────────────────────────────────────────────────────────────
*/