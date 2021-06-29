var fs = require('fs'); // importing fs module

fs.open('demo2.js', 'w', function (err,file) {
    if (err) throw err;
    console.log('file open in write mode!');

});