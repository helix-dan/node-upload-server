var http = require('http');
var url  = require('url');

function start(route){
	function OnRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		response.writeHead(200);
		response.write('Get it! on '+ pathname);

		route(pathname);

		response.end();
	}


	http.createServer(OnRequest).listen(3104);
	console.log("localhost start on 3104");
}

exports.start = start;
