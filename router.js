function route(handle, pathname){
	console.log("run for " + pathname);

	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}else{
		console.log("there is no request for path: " + pathname);
		return "404 pages";
	}
}

exports.route = route;
