/// <reference path="typings/node/node.d.ts" />

"use strict";

const net = require('net')

const client = net.connect(5432)

client.on('error', err => console.log('ERROR: ' + err.message))
client.on('data', data => {
	const msg = JSON.parse(data);
	console.log(msg.filename + ' ' + msg.kind + ' at ' + new Date(msg.timestamp))	
})
