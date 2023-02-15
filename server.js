require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('./db/conn');
const posts = require('./models/postSchema')
const Cors = require('cors');
const router = require('./routes/router');

const port =process.env.PORT || 8003

const app = express();

app.use(Cors());

app.use(express.json());

app.use(router);


// app.get('/', (req, resp) => {
//     resp.send('hello world');
// })

app.listen(port);