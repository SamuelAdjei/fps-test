const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/views')));

// app.get('/familyoffice', (req, res) => {
//   res.sendFile(__dirname + '/views/familyoffice.html');
// });

// app.get('/household', (req, res) => {
//   res.sendFile(__dirname + '/views/household.html');
// });

// app.get('/lifestyle-wellbeing', (req, res) => {
//   res.sendFile(__dirname + '/views/lifestyle.html');
// });

// app.get('/childcare-education', (req, res) => {
//   res.sendFile(__dirname + '/views/childcare.html');
// });

// app.get('/contact', (req, res) => {
//   res.sendFile(__dirname + '/views/contact.html');
// });

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

// app.use(express.static('public'));
// app.use(express.static('views'));
// console.log(__dirname);
module.exports = app;
