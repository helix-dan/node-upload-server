var http = require('http');
var url  = require('url');

function start(route, handle){
	function OnRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		response.writeHead(200);
		
		var routeDoSomething = route(handle, pathname);
		response.write(routeDoSomething);

		response.end();
	}


	http.createServer(OnRequest).listen(3104);
	console.log("localhost start on 3104");
}

exports.start = start;
