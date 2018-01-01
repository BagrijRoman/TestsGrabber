const { compose } = require('recompose');
const router = require('express').Router();

const facultyRoutes = require('./faculty');

const routes = compose(
  facultyRoutes
);

module.exports = routes(router);
