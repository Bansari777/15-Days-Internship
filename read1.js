var fs = require('fs'); // importing fs module

var data = fs.readFileSync('demo22.txt');  // synchronous file read

    console.log("Synchronous read: " + data.toString());
    console.log("Program ended");