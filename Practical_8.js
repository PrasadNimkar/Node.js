var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});
conn.connect(function (err) {
    if (err)
        throw err;
    console.log("Connection with the mysql is successfull...");
});