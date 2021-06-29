var http = require('http');

http.createServer(function(req,res){
 res.end("welcome to node js 3");
}).listen(3000);
console.log("server is started on port number 3000");