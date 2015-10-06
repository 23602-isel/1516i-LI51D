/// <reference path="typings/node/node.d.ts" />

"use strict";

const fs = require('fs')
const cp = require('child_process')

const watcher = fs.watch('target.txt', (event) => console.log('target.txt modified: ' + event))


// notepad referencia um objecto que representa o processo que executa o notepad
//
const notepad = cp.spawn('notepad', ['target.txt'])

notepad.on('close', () => {
		console.log("Notepad Closed!")
		watcher.close()
	})
