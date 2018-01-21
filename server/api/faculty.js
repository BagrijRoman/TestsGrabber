const responseHelper = require('../util/responseHelper');
const request = require('../util/request');
const dataRoutes = require('../const/dataRoutes');
const pickArrayFields = require('../util/pickArrayFields');

const facultyRoutes = router => {
  router.route('/faculty/list')
    .get((req, res, next) => {
      const { method, url } = dataRoutes.category;

      const responseSample = [{"id":"1119","name":"Коледж Лікув. справа"},{"id":"1120","name":"Коледж Сестрин. справа"},{"id":"1412","name":"ННІ ПО"},{"id":"158","name":"Стоматологічний факультет"},{"id":"161","name":"Фармацевтичний факультет"},{"id":"426","name":"Медичний факультет"},{"id":"2754","name":"Фізична терапія, ерготерапія"},{"id":"2520","name":"Коледж Ортопедична стоматологія"}];
      responseHelper.operationSuccess(res, responseSample);

      // request({
      //   method,
      //   url,
      //   data: { id: 0, lang: 1 },
      // })
      //   .then(({ data }) => {
      //     const normalizedData = pickArrayFields(data, ['id', 'name']);
      //     responseHelper.operationSuccess(res, normalizedData);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     responseHelper.oparationFailed('Retrieveing faculties list error');
      //     // Todo add global error handler
      //   });
    });

  return router;
};

module.exports = facultyRoutes;
