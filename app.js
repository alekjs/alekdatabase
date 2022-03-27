const express = require('express');
const BaseData = require('./data');
const data = new BaseData();
const app = express();
app.use(express.json());
app.use(express.static('public'));
const port = 3000;
const dir = {root: __dirname};

app.get('/', (req, res) => {
  res.sendFile('./public/main.html', dir);
})

app.get('/customers', async (req, res) => {
  const customers = await data.getCustomers();
  res.send(customers);
})

app.post('/addcustomer', async (req, res) => {
  const {username, content, msgtime} = req.body;
console.log(`${username} said "${content}" at ${msgtime}`);
  data.addCustomer(username, content, msgtime);
  res.sendStatus(200);
  res.redirect('https://google.com');
})

app.listen(3000, function() {
    console.log(`app listening on port ${port}`)
});