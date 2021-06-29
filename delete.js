var fs = require('fs'); // importing fs module

fs.unlink('demo23.txt', function (err) {
    if(err) throw err;
    console.log('file deleted!');
});