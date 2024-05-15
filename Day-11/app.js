const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

require('./connection');
const router = require('./Route/User');
const router2 = require('./Route/Auth');


const app = express();
app.use(cookieParser());
app.use(express.json());

app.use('/', router);
app.use('/', router2);

app.listen(3000, () => {
    console.log(`Server is running on 3000`);
});