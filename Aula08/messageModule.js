
console.log("messageModule START");

module.exports.Message = function (filename, kind, timestamp) {
    console.log(this);
    this.filename = filename;
    this.kind = kind;
    this.timestamp = timestamp || Date.now();
};


console.log("messageModule END");




