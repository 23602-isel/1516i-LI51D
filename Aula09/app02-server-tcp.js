/// <reference path="typings/node/node.d.ts" />

"use strict";

// Preparing phase

const fs = require('fs');
const net = require('net');
const mm = require('./messageModule');

var PORT = 3001;

var Message = mm.Message;
console.log(Message);


if(process.argv.length <= 2) {
	console.log("ERROR you must provide a filename!")
	process.exit(0)
}

const filename = process.argv[2];


// Initialization Phase

net.createServer(OnClientConnected)
	.listen(PORT, ReportListening);


var clients = {};

var counter = 0;

const watcher = fs.watch(filename, SomethingHappenedOnFile);


// Callback phase

function SomethingHappenedOnFile(event) {
	Object.keys(clients).forEach(k => {
		console.log("Writing to client before");
		clients[k].write(JSON.stringify(new Message(filename, 'changed')) + '\n');
		console.log("Writing to client after");
	});
};

function OnClientConnected(socket) {
	let id = counter++;
	console.log("Client connected with id " + id);

	socket.write(JSON.stringify(new Message(filename, 'listening')) + '\n');

	clients[id] = socket;
	console.log(Object.keys(clients));

	socket.on('close', () => {
		console.log("Subscriber disconnected. id " + id);

		delete clients[id];
		console.log(Object.keys(clients));
	})
}


function ReportListening(e)  {
	console.log("Listening on port " + PORT + "...")
}