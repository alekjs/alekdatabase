const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('./public/main.html', {root: __dirname})
})
app.get('/database', (res, req) => {
const config = mysql.createConnection({
user: 'root',
host: 'localhost',
password: 'Password321!',
database: 'customerdb'
});
config.connect(function(err) {
    if (err) throw err;
    config.query("select * from customerdb.customers;", function (err, result) {
      if (err) throw err;
      req.send(result);
    });
  });
})

app.listen(3000, function() {
    console.log(`app listening on port ${port}`)
});