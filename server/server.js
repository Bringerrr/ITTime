const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4001;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

var public = path.join(__dirname, 'public');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.use(express.static(__dirname + '/public'));

const server = app.listen(port, () => {
  console.log(`Voting server started at ${port}`);
});
