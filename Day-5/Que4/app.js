const express = require('express');
const app = express();


app.get('/notfound', (req, res) => {
  res.status(404).send('Not Found');
});

app.get('/error', (req, res) => {
  throw new Error('Internal Server Error');
});


app.get('/customerror', (req, res) => {
  res.status(400).send('Custom Error Message');
});


app.get('/unauthorized', (req, res) => {
  res.status(401).send('Unauthorized');
});


app.get('/forbidden', (req, res) => {
  res.status(403).send('Forbidden');
});


app.post('/notallowed', (req, res) => {
  res.status(405).send('Method Not Allowed');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});