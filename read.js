var fs = require('fs'); // importing fs module

fs.readFile("demo22.txt","utf-8", function (err,data) {  // asynchronous file read
    if(err) throw err;
    console.log(data);
});