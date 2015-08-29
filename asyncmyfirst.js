var fs = require('fs')

var readCallback = function(err, obj) {
	var string = obj.toString(),
		arr = string.split('\n')
		console.log(arr.length-1)
}

fs.readFile(process.argv[2], readCallback)