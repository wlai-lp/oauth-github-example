require('dotenv').config();
const axios = require('axios');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/auth', (req, res) => {
  res.redirect(
    `https://dev-ebsf4fc7.us.auth0.com/oauth/device/code?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});

app.get('/callback', ({ query: { code } }, res) => {
  console.log('My code:', code);
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(3000);
// eslint-disable-next-line no-console
console.log('App listening on port 3000');
