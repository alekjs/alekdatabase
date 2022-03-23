const mssql = require("mysql");
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (res, req) {
const config = {
user: 'root',
password: 'Password321!',
server: 'localhost',
database: 'customerdb'
};

mssql.connect(config, function (err) {
    var request = new mssql.Request();
    request.query('select * from customerdb.customers;',
        function (err, lastname) {

            if (err) console.log(err)
            res.send(lastname);

        });
});
});

app.listen(3000, function() {
    console.log(`app listening on port ${port}`)
});