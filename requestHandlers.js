var exec = require('child_process').exec;

function indindex(){
	console.log("in the index");
	return "it is index";
}

function start(){
	console.log("start the server");
	var content = "empty";

	exec("ls -lah", function (error, stdout, stderr) {
   		content = stdout;
	});

	return content;
}

function upload(){
	console.log("upload the pic");
	return "it is upload";
}

exports.start = start;
exports.upload = upload;
