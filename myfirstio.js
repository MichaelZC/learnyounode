var fs = require('fs'),
	filepath = process.argv[2],
	file = fs.readFileSync(filepath).toString(),
	arr = file.split('\n')

console.log(arr.length-1)