let mymodule = require("./6_Modular.js");
let directory = process.argv[2];
let fileExtension = process.argv[3];

mymodule(directory, fileExtension, function(err, files) {
	if (err) return console.log(err);
	for (let file of files) console.log(file);
});


/*
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────
 _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
 on/solution.js_ :


 var filterFn = require('./solution_filter.js')
 var dir = process.argv[2]
 var filterStr = process.argv[3]

 filterFn(dir, filterStr, function (err, list) {
 if (err) {
 return console.error('There was an error:', err)
 }

 list.forEach(function (file) {
 console.log(file)
 })
 })
 ─────────────────────────────────────────────────────────────────────────────
 */