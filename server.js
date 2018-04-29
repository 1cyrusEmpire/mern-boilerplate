var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// either the process port or 3000
const PORT = process.env.PORT || 3000;

// serve static assests
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
mongoose.connect('mongodb://localhost/basic-mern-boilerplate');

// be all get all
app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get('/api', (req,res) => {
  res.send("you have hit the api end point....");
});

// server listening
app.listen(PORT, () => {
  console.log(`app listening on .... ${PORT}!`);
});

module.exports = app;
