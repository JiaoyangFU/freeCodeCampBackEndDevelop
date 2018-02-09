let bl = require('bl');
let http = require('http');
let result = [];
let count = 0;


function collectData (index) {
	http.get(process.argv[index + 2], function(response) {
		response.pipe(bl(function(err, data) {
			if (err) {
				return console.error(err);
			}
			count++;
			result[index] = data.toString();
			if (count === 3) {
				printData();
			}
		}));
	});
}

function printData () {
	result.forEach(function(item) {
		console.log(item);
	});
}

for (let i = 0; i < 3; i++) {
	collectData(i);
}
