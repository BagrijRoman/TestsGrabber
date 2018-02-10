const request = require('./request');
const dataRoutes = require('../const/dataRoutes');
const parseQuestionsList = require('../util/parseQuestionsList');

const getTestInstance = (testId) => new Promise((resolve, reject) => {
  const { createStudent: { method, url }, getTest, finishTest, getTestResults } = dataRoutes;
  request({
    method,
    url,
    data: {
      category: testId,
      group: 'groupName',
      last_name: 'lastName',
      name: 'name',
    }
  })
    .then(() => {
      const { method, url } = getTest;
      return request({ method, url });
    })
    .then(() => {
      const { method, url } = finishTest;
      return request({ method, url });
    })
    .then(() => {
      const { method, url } = getTestResults;
      return request({ method, url });
    })
    .then(({ data }) => {
      const parsedQuestions = parseQuestionsList(data);
      resolve(parsedQuestions);
    })
    .catch((err) => {
      console.log(err.status);
      reject(err);
    });
});

module.exports = getTestInstance;
