
fs = require('fs');
path = require('path');

let directory = process.argv[2];
let fileExtension = "." + process.argv[3];

fs.readdir(directory, function(err, files) {
	if(err)  return console.log(err);

	for (let file of files) {
		if (fileExtension === path.extname(file)) {
			console.log(file);
		}
	}
});





/*
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────
 var fs = require('fs')
 var path = require('path')

 var folder = process.argv[2]
 var ext = '.' + process.argv[3]

 fs.readdir(folder, function (err, files) {
 if (err) return console.error(err)
 files.forEach(function (file) {
 if (path.extname(file) === ext) {
 console.log(file)
 }
 })
 })

 ─────────────────────────────────────────────────────────────────────────────
*/