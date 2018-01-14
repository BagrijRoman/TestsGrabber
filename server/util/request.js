const axios = require('axios');
const R = require('ramda');
const { Cookie } = require('../config');

const defaultHeaders = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'uk-UA,uk;q=0.9,ru;q=0.8,en-US;q=0.7,en;q=0.6,la;q=0.5',
  'Connection': 'keep-alive',
  'Content-Length': '17',
  'Content-Type':'application/json;charset=UTF-8',
  'DNT':'1',
  'Host':'tests.if.ua',
  'Origin':'http://tests.if.ua',
  'Referer':'http://tests.if.ua/',
  'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
  Cookie,
};

const request = ({ method, url, data, headers }) =>
  axios({
    method,
    url,
    data: data || {},
    headers: R.merge(defaultHeaders, (headers||{})),
  });

module.exports = request;
