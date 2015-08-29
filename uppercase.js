var map = require('through2-map'),
	port = process.argv[2],
	http = require('http')

var server = http.createServer(function callback(request, response) {
	request.pipe(map(function (data) {return data.toString().toUpperCase()})).pipe(response)
})

server.listen(port)