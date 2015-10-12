/// <reference path="typings/node/node.d.ts" />

"use strict";

const fs = require('fs');
const net = require('net');

const mm = require('./messageModule');

var Message = mm.Message;


if(process.argv.length <= 2) {
	console.log("ERROR you must provide a filename!")
	process.exit(0)
}

const filename = process.argv[2];

const PORT = 5400;


net.createServer(socket => {
		console.log("Subscriber connection received....");
		socket.write(JSON.stringify(new Message(filename, 'listening')) + '\n');

		const watcher = fs.watch(
			filename, 
			event => socket.write(JSON.stringify(new Message(filename, 'changed')) + '\n')
		);
		socket.on('close', () => {
			console.log("Subscriber disconnected...")
			watcher.close()
		})		
	})
	.listen(5400, (e) => console.log("Listening on port " + PORT + "...") );


