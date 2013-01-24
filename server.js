var http = require('http');

function start(){
	function OnRequest(request, response){
		response.writeHead(200);
		response.write('Get it!');
		response.end();
	}


	http.createServer(OnRequest).listen(3104);
	console.log("localhost start on 3104");
}

exports.start = start;
