var fs = require('fs')
fs.rename('test.txt', 'test1.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed Successfully!');
});