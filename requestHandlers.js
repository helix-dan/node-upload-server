var exec = require('child_process').exec;

function start(response){
	console.log("start the server");
	var content = "empty";

//	exec("find /", {timeout: 10000, maxBuffer: 20000*1024},

	exec("ls -lah",
	 function (error, stdout, stderr) {
   		response.writeHead(200, {"Contect-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

function upload(response){
	console.log("upload the pic");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("ready to upload!");
	response.end();
}

exports.start = start;
exports.upload = upload;
