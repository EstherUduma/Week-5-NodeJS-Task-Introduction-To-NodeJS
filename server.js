const { fstat } = require('fs');
const http = require('http');

//Create server
const server = http.createServer(function(req, res) {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data)=> {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/about") {
        fs.readFile("about.html", (err, data)=> {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/contact") {
        fs.readFile("contact.html", (err, data)=> {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    if (req.url === "/home") {
        fs.readFile("index.html", (err, data)=> {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
});

//Create a port
server.listen(4000, '127.0.0.1');

console.log("Yes, you have created a server!");