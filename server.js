var http = require('http');

var http_server = http.createServer(function(request, response){
	response.writeHead(200);
	response.write('Get it!');
	response.end();
});

http_server.listen(3104);

console.log("localhost start on 3104");
