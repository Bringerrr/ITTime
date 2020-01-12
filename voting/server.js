const express = require('express');
const voting = require('./routes/voting');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4001;

const mainPage = './assets/site/index.html';

app.use(express.urlencoded({ extended: true }));
app.use(cors());

var public = path.join(__dirname, 'public');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.use(express.static(__dirname + '/public'));

// app.use('/', voting);

const server = app.listen(port, () => {
  console.log(`Voting server started at ${port}`);
});
