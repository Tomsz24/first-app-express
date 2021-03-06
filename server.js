const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  res.show = name => {
    res.sendFile(path.join(__dirname, `views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.use('/user', (req, res, next) => {
  res.show('forbidden.html');
});

app.get('/', (req, res) => {
  res.show('home.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/home', (req, res) => {
  res.show('home.html');
});

app.get('/user/settings', (req, res) => {
  res.send('<h1>settings</h1>');
});

app.get('/user/panel', (req, res) => {
  res.send('<h1>panel</h1>');
});

app.use((req, res) => {
  res.status(404).show('404.html');
});

app.listen(8001, (req, res) => {
  console.log('server is running on port: 8001');
});

