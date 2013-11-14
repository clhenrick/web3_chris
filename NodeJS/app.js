// Node.js

console.log('Welcome user!');
setTimeout(function(){
	console.log('My name is Chris');
}, 2000);

// let's use some modules
var http = require('http'),
	util = require('util'),
	fs = require('fs'),
	exec = require('child_process').exec, // execute another process beneath Node
	child; 

// using the http module: req = request, res = response
http.createServer(function(req, res){
	console.log(req);
	res.writeHead(200); // 200 = OK, 404 = file not found, 500 = internal error
	res.end('hello client');
}).listen(4000); // listen to port 4000

util.log('my server is running yay!'); // log to the terminal

exec('ifconfig', function(err, stdout, stderr){
	util.log('output: ' + stdout);

	// determine path of file to write to
	var path = 'data.txt';

	// write a temp folder that has data.txt!
	fs.writeFile(path, stdout, function(err) { 
		if(err) util.log(err);
		util.log('success!');
	});

});

