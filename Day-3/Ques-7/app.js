//.User Build a validation middleware that dynamically fetches validation rules from a configuration file. The rules should be applied based on the route
//being accessed.

const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware');

const app = express();

app.use(bodyParser.json());

app.use(middleware);

app.get('/login', (req, res) => {
    res.send('You are logged in successfully');
});

app.post('/signup', (req, res) => {
    res.send('You have been signed up');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});