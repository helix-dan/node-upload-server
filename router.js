function route(handle, pathname, response){
	console.log("run for " + pathname);

	if(typeof handle[pathname] === 'function'){
		return handle[pathname](response);
	}else{
		console.log("there is no request for path: " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 not found");
		response.end();
	}
}

exports.route = route;
