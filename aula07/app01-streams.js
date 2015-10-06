/// <reference path="typings/node/node.d.ts" />

"use strict";

const fs = require('fs')
const cp = require('child_process')


// argv[0] = node.js
// argv[1] = app01-stremas.js
// argv[2] = nome do ficheiro
// 
if(process.argv.length <= 2) {
	console.log("ERROR you must provide a filename!")
	process.exit(0)
}

const filename = process.argv[2]
const watcher = fs.watch(filename, (event) => console.log(filename + ' modified: ' + event))


// notepad referencia um objecto que representa o processo que executa o notepad
//
const notepad = cp.spawn('notepad', [filename])

notepad.on('close', () => {
		console.log("Notepad Closed!")
		watcher.close()
		console.log("-----------------------------------------------")
		
		// fs.readFile(filename, getFileContent)
		
		const stream = fs.createReadStream(filename)
		stream.on('error', err => console.log('ERROR: ' + err.message))
		stream.on('data', data => console.log(data.toString()))
	})

function getFileContent(err, data) {
		if(err) throw err
		// console.log(data.toString())
		// write recebe como parametro o Buffer a escrever
		process.stdout.write(data)
} 