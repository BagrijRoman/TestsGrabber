const R = require('ramda');

const pickArrayFields = (array, fields) => array.map(item => R.pick(fields, item));

module.exports = pickArrayFields;
