// web.js
// this file runs on the server

var connect = require('connect');
var port = process.env.PORT || 5000; //telling Heroku what port to use if it doesn't assign one

//Clean and Clear Web Server
var app = connect.createServer(
	connect.static(__dirname + '/public')
	).listen(port);

console.log('server running at port: ' + port);

var io = require('socket.io').listen(app), //change app to 5002 to make sure socket.io is running
	util = require('util');


var onlineUser = [];

// init connections, create a socket that is an event listener
io.sockets.on('connection', function(whale){
	util.log('hello ' + whale.id);
	whale.on('mouse position', function (data){
		// log mouse x & y data to terminal
		util.log(data.x + ', ' + data.y); 

		// every socket / connection, emit to every connected client
		io.sockets.emit('to everybody', {
			x: data.x,
			y: data.y
		});
	});	

});