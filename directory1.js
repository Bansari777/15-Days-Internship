const fs = require('fs'); //importing fs package
const path = require('path'); //importing path

fs.mkdir(path.join(__dirname, 'xyz'),(err) => { //folder name is demo2
    if (err) {
        return console.error(err);
    }
    console.log('directory created successfully!');
});