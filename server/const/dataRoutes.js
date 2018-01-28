const testsApiBase = 'http://tests.if.ua/api';

const dataRoutes = {
  category: {
    method: 'POST',
    url: `${testsApiBase}/category`,
  },
  createStudent: {
    method: 'POST',
    url: `${testsApiBase}/createstudent`,
  },
  getTest: {
    method: 'POST',
    url: `${testsApiBase}/gettest`,
  },
  finishTest: {
    method: 'POST',
    url: `${testsApiBase}/finish`,
  },
  getTestResults: {
    method: 'POST',
    url: `${testsApiBase}/Stat`,
  },
};

module.exports = dataRoutes;
