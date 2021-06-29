var fs = require('fs');

fs.appendFile('demo22.txt', 'Hello node js!',function(err){
    if (err) throw err;
    console.log('file content updated');
});