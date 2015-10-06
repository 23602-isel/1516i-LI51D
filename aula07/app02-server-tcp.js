/// <reference path="typings/node/node.d.ts" />

"use strict";

const fs = require('fs')
const net = require('net')

if(process.argv.length <= 2) {
	console.log("ERROR you must provide a filename!")
	process.exit(0)
}

const filename = process.argv[2]


net.createServer(socket => {
		console.log("Subscriber connection received....")
		socket.write(JSON.stringify({
				filename: filename,
				kind: 'listening',
				timespan: Date.now()
			}) + '\n');
		const watcher = fs.watch(
			filename, 
			event => socket.write(JSON.stringify({
				filename: filename,
				kind: 'changed',
				timespan: Date.now()
			}) + '\n')
		)
		socket.on('close', () => {
			console.log("Subscriber disconnected...")
			watcher.close()
		})		
	})
	.listen(5432)

console.log("Waiting for connections...")
