const express = require('express');
const BaseData = require('./data');
const data = new BaseData();
const app = express();
app.use(express.static('public'));
const port = 3000;
const dir = {root: __dirname};

app.get('/', (req, res) => {
  res.sendFile('./public/main.html', dir);
})

app.get('/customers', async (req, res) => {
  await data.connect();
  const customers = await data.getCustomers();
  console.log(customers);
  res.send(JSON.stringify(customers));
})

app.listen(3000, function() {
    console.log(`app listening on port ${port}`)
});