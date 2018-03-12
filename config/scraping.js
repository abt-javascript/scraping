'use strict';

const cheerio = require('cheerio');

const options = {
  uri: `http://www.shdasd.com`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

module.exports = options
