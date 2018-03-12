'use strict';

const rp = require('request-promise');
const express = require('express')
const app = express();
const option = require('./config/scraping.js');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  rp(option)
  .then(($) => {
    let html = $.html();
    res.render('index', {data:html});
  })
  .catch((err) => {
    res.send(err);
  });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
