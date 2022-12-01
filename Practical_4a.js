var fs = require('fs')
fs.appendFile('test.txt', 'Contents of test file', function (err) {
    if (err) throw err;
    console.log('File is saved successfully!');
});