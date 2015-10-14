/// <reference path="typings/node/node.d.ts" />

"use strict";

// Preparing phase

const fs = require('fs');
const net = require('net');
const myWatcherModule = require('./watcherModule');

var Message = myWatcherModule.Message;

var PORT = 3001;

if(process.argv.length <= 2) {
	console.log("ERROR you must provide a filename!")
	process.exit(0)
}

const filename = process.argv[2];

const myWatcher = myWatcherModule(filename);


// Initialization Phase
net.createServer(OnClientConnected)
	.listen(PORT, ReportListening);


// Callback phase

function OnClientConnected(socket) {
	console.log("Client connected");

	socket.write(JSON.stringify(new Message(filename, 'listening')) + '\n');

	var regId = myWatcher.on('change', msg => socket.write(msg +'\n'));

	socket.on('close', () => {
		console.log("Subscriber disconnected.");
		myWatcher.unregister(regId);
	})
}


function ReportListening(e)  {
	console.log("Listening on port " + PORT + "...")
}