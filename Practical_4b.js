var fs = require('fs')
fs.writeFile('test.txt', 'Welcome to this file from node js', function (err) {
    if (err) throw err;
    console.log('Saved!');
});