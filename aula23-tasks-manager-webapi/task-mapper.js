/// <reference path="typings/node/node.d.ts" />

"use strict";

const http = require('http')

function Options(p, m) {
    this.hostname = 'localhost'
    this.port = 5984
    this.method = m || 'GET'
    this.path = p || '/tasks'
}


/*
 * callback's descriptor: (Error, Task) => void
 */
exports.get = function(id, callback) {
	const opt = new Options('/tasks/' + id)
	const request = http.request(opt, resp => {
		let result = ''
		resp.on('error', callback)
		resp.on('data', data => result += data)
		resp.on('end', () => callback(null, JSON.parse(result)))
		
	})
	request.end();
	// request.on('error', err => console.log('ERROR' + err)) // ERRADO ATENCÃO
	// request.on('error', err => callback(err))
	request.on('error', callback)
}

/*
 * callback's descriptor: (Error, Task[]) => void
 */
exports.getAll = function(callback) {

}

/*
 * callback's descriptor: (Error, id) => void
 */
exports.insert = function(Task, callback) {
	
}

/*
 * callback's descriptor: (Error) => void
 */
exports.update = function(Task, callback) {
	
}

/*
 * callback's descriptor: (Error) => void
 */
exports.delete = function(id, callback) {
	
}