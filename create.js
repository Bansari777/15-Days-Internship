var fs = require('fs'); // importing fs module

fs.writeFile('demo22.txt', 'hello world', function (err,file) {
    if (err) throw err;
    console.log('file created!');

});