var http = require('http'),
	util = require('util'),
	fs = require('fs'),
	exec = require('child_process').exec; // execute another process beneath Node

var connect = require('connect');

//Clean and Clear Web Server
connect.createServer(
	connect.static(__dirname + '/public')
	).listen(4000);