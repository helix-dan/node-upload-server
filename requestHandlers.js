var exec = require('child_process').exec;

function start(response){
	console.log("start the server");
	var content = "empty";

//	exec("find /", {timeout: 10000, maxBuffer: 20000*1024},

//	exec("ls -lah",
//	 function (error, stdout, stderr) {
		var body = '<html>'+
		    '<head>'+
		   	 '<meta http-equiv="Content-Type" content="text/html; '+
		   	 'charset=UTF-8" />'+
		    '</head>'+
		    '<body>'+
		   	 '<form action="/upload" method="post">'+
		   		 '<textarea name="text" rows="20" cols="60"></textarea>'+
		   		 '<input type="submit" value="Submit text" />'+
		   	 '</form>'+
		   '</body>'+
		 '</html>';

   		response.writeHead(200, {"Contect-Type": "text/plain"});
		response.write(body);
		response.end();
//	});
}

function upload(response){
	console.log("upload the pic");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("ready to upload!");
	response.end();
}

exports.start = start;
exports.upload = upload;
