var fs = require('fs'); // importing fs module
var http = require('http');

http.createServer(function (req,res) {
    fs.readFile('server1.html', function (err,data)  {
    res.writeHead(200, {'Content-Type'  : 'text/html' });
    res.write(data);
    res.end();
});
}).listen(5000);
    console.log("server started!");
