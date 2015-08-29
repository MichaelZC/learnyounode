var http = require('http'),
	port = process.argv[2],
	file = process.argv[3],
	fs = require('fs')


var server = http.createServer(function callback(request, response) {
	var data = fs.createReadStream(file)
	data.pipe(response)
})

server.listen(port)
