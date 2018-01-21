const { compose } = require('recompose');
const router = require('express').Router();

const facultyRoutes = require('./faculty');
const courseRoutes = require('./course');
const subjectRoutes = require('./subject');
const testRoutes = require('./test');

const routes = compose(
  facultyRoutes,
  courseRoutes,
  subjectRoutes,
  testRoutes,
);

module.exports = routes(router);
