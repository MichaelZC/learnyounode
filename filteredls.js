var fs = require('fs')
var path = require('path')

var file = process.argv[2],
	ext = process.argv[3]

var filter = function(err, list) {
	list.filter(function (v) {
		if (path.extname(v) === ('.' +ext)) {
			return true
		} else {return false}
	}).forEach(function (v) {
		console.log(v)
	})
}

fs.readdir(file, filter)