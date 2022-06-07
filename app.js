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

app.post('/deletethread', async (req, res) => {
  const {newthreadno, id} = req.body;
  data.deleteThread(newthreadno, id);
  res.sendStatus(200);
})

app.post('/addcustomer', async (req, res) => {
  const {username, content, msgtime} = req.body;
console.log(`${username} (${req.ip}) said "${content}" at ${msgtime}`);
  data.addCustomer(username, content, msgtime);
  res.sendStatus(200);
})

app.get('/getthreads', async (req, res) => {
  const threads1 = await data.getThreads();
  res.send(threads1);
})

app.get('/threads', async (req, res) => {
  if(isNaN(req.query.id) || !req.query.id) {
    res.sendFile('./public/nosuchthread.html', dir);
    return;
  }
  
  const datachecker = await data.getthreadData(req.query.id);

  if(datachecker.length == 0)
  {
    res.sendFile('./public/nosuchthread.html', dir);
  }
  else
  {
  res.sendFile('./public/threads.html', dir);
  }
})

app.get('/comments', async (req, res) => {
  const comments = await data.getComments();
  res.send(comments);
})

app.get('/threadsapi/:id', async (req, res) =>
{
  if(isNaN(req.params.id) || !req.params.id) {
    res.status(404).send('no such thread');
    return;
  }
  
  const threaddata = await data.getthreadData(req.params.id);

  if(threaddata.length == 0)
  {
    res.status(404).send('no such thread');
  }
  else
  res.send(threaddata);
})

app.post('/addcomment', async (req, res) => {
  const {username, content, comment_time, threadid} = req.body;
  if(!username || !content || !comment_time || !threadid) {
    return;
}
console.log(`${username} (${req.ip}) said "${content}" at ${comment_time} on thread id ${threadid}`);
  data.addComment(username, content, comment_time, threadid);
  res.sendStatus(200);
})

app.post('/addthread', async (req, res) => {
  const {creator, title, threadtime, content} = req.body;
  if(!creator || !title || !threadtime || !content) {
    return;
}
console.log(`${creator} (${req.ip}) created the post "${title}" at ${threadtime}`);
  data.addThread(creator, title, threadtime, content);
  res.sendStatus(200);
})

app.listen(3000, function() {
    console.log(`app listening on port ${port}`)
});