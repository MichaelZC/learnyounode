var mymodule = require('./modular.js')

var file = process.argv[2],
	ext = process.argv[3]

var callback = function (err, list) {
	if (!!err) {return err}
	list.forEach(function(v) {console.log(v)})
}

mymodule(file, ext, callback)