var http = require('http');
var url  = require('url');

function start(route, handle){
	function OnRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("request for " + pathname + " received");
		
		route(handle, pathname, response);
	}


	http.createServer(OnRequest).listen(3104);
	console.log("localhost start on 3104");
}

exports.start = start;
