// sockets.js
// this file runs in browser

// good practice to wrap everything inside an onload funciton
window.onload = function() {

	// connect clent to the server
	var socket = io.connect(window.location.hostname);

	// send client mousemovement to server
	$(document).mousemove(function(e){
		// follow mouse movement
		var posX = e.pageX,
			posY = e.pageY;

		// send movement to server
		socket.emit('mouse position', {
			x: posX,
			y: posY
		});

		console.log("sending: " + posX + ', ' + posY);

	});

	//
	socket.on('to everybody', function(liger){
		console.log(liger.x, liger.y);
	});

};