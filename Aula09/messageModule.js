
console.log("messageModule START");
const fs = require('fs');

function Message(filename, kind, timestamp) {
    console.log(this);
    this.filename = filename;
    this.kind = kind;
    this.timestamp = timestamp || Date.now();
};


//module.exports = function(fileName) {
//    const watcher = fs.watch(
//            filename,
//            event => socket.write(JSON.stringify(new Message(filename, 'changed')) + '\n')
//    );
//
//    return {
//
//
//    };
//
//
//};

module.exports.Message = Message;




console.log("messageModule END");




