var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
	var filterFunc = function(err, files) {
		if (!!err) {return callback(err)}
		var filteredList = files.filter(function (v) {if (path.extname(v).slice(1) === ext) {return true} else {return false}})
		return callback(null, filteredList)
	}
	fs.readdir(dir, filterFunc)
}