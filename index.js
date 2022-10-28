const http = require('http');
const fs = require('fs');

var index = fs.readFileSync('index.html',);
var page2 = fs.readFileSync('page2.html');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(index);
    }

    else if (req.url == '/page2.html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        res.end(page2);
    }

    else ('Invalid request');
});

server.listen(3000);

console.log('The web server is running at port 3000');

// const http = require('http');
// const express = require('express');

// var app = express();
// app.use = express.static(__dirname);

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/page2', function(req, res) {
//     res.render(__dirname + '/page2.html');
// });

// app.listen(3000, (err) => {
//     if (err) throw err;
//     console.log('The Web server are running at port 3000.');
// });
