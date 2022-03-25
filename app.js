require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;
const dir = {root: __dirname};

app.get('/', (req, res) => {
  res.sendFile('./public/main.html', dir);
})

app.get('/database', (res, req) => {
 const config = mysql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
  });
addata = `select * from customerdb.customers;`
  config.query(addata, function (err, result) {
    if (err) throw err;
    req.send(result);
  });
})

app.listen(3000, function() {
    console.log(`app listening on port ${port}`)
});