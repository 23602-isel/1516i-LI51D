// Usage: node httpclient.js

// To create the database: PUT
// To delete the database: DELETE
// To create a new task: PUT /1
// To obtain the created task: GET /1
// To update the task: PUT /1?rev=1-d77ce97bbd5bea8b8c3ef070af3733df  (the rev value is the same as the _rev property. Must do a GET first)
// To delete a task: DELETE /1?rev=2-d77ce97bbd5bea8b8c3ef070af3733df  (the rev value is the same as the _rev property. Must do a GET first)

var http = require("http");

var task = require("./task.json");

var method = process.argv[2] || "GET";
var pathSuffix = process.argv[3] || "";

var options = {
    hostname: "localhost",
    port: 5984,
    method: method,
    path: "/tasks" + pathSuffix
};

var req = http.request(options, processResponse);

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
if(method != "GET") {
    req.write(JSON.stringify(task));
}

req.end();


function processResponse(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));

    res.on('data', function(data) {
        console.log('BODY: ' + data);
    });
}


