
console.log("messageModule START");
const fs = require('fs');


function FileWatcher(filename) {
    const watcher = fs.watch(filename, SomethingHappenedOnFile);
    var clients = {};

    var counter = 0;

    // Public interface
    this.on = function(eventName, cb) {
        if(eventName != "change") {
            throw "Unsuported event";
        }

        clients[counter] = cb;
        return counter++;
    }

    this.unregister = function(key) {
        delete clients[key];
    }

    // callbacks
    function SomethingHappenedOnFile(event) {
        Object.keys(clients).forEach(k => {
            console.log("Writing to client before");
            clients[k](JSON.stringify(new Message(filename, 'changed')) + '\n');
            console.log("Writing to client after");
        })
    };
};


function Message(filename, kind, timestamp) {
    console.log(this);
    this.filename = filename;
    this.kind = kind;
    this.timestamp = timestamp || Date.now();
};


module.exports = function(filename) {
    return new FileWatcher(filename);
};

module.exports.Message = Message;

console.log("messageModule END");




