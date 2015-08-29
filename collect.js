var http = require('http')

http.get(process.argv[2], function (response) {
	var res = []
  response.setEncoding('utf8')
  response.on('data', function(data) {res.push(data)})
  response.on('error', function(error) {console.log(error)})
  response.on('end', function() {console.log(res.reduce(function(a,v,i){return a+v.length},0));console.log(res.join(''))})
})