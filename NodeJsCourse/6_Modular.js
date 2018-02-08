let fs = require('fs');
let path = require('path');

module.exports = function(directory, fileExtension, callback) {
	let filteredFiles = [];

	fs.readdir(directory, function(err, files) {
		if(err)  return callback(err);

		let extension = "." + fileExtension;
		for (let file of files) {
			if (extension === path.extname(file)) {
				filteredFiles.push(file);
			}
		}
		callback(null, filteredFiles);
	});
}






/*
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────
 _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
 on/solution_filter.js_ :


 var fs = require('fs')
 var path = require('path')

 module.exports = function (dir, filterStr, callback) {
 fs.readdir(dir, function (err, list) {
 if (err) {
 return callback(err)
 }

 list = list.filter(function (file) {
 return path.extname(file) === '.' + filterStr
 })

 callback(null, list)
 })
 }
 ─────────────────────────────────────────────────────────────────────────────
*/