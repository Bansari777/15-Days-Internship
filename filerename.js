var fs = require('fs');

fs.rename('demo22.txt', 'demo23.txt', function (err) {
    if (err) throw err;
    console.log('file renamed');
});