const responseHelper = require('../util/responseHelper');
const request = require('../util/request');
const dataRoutes = require('../const/dataRoutes');
const pickArrayFields = require('../util/pickArrayFields');

const facultyRoutes = router => {
  router.route('/subject/list')
    .get((req, res, next) => {
      const { method, url } = dataRoutes.category;
      const { courseId } = req.query;

      const responseSample = [{"id":"1031","name":"Мікробіологія"},{"id":"1824","name":"ОХТА (скорочена програма)"},{"id":"568","name":"Патофізіологія"},{"id":"569","name":"Пропедевтика педіатрії"},{"id":"570","name":"Фармакологія"},{"id":"1343","name":"Патоморфологія"},{"id":"583","name":"Оперативна хірургія та топографічна анатомія"},{"id":"603","name":"Загальна хірургія"},{"id":"900","name":"Сестринська Практика"},{"id":"914","name":"Сестринська проктика Хірургія"},{"id":"1458","name":"Гігієна та екологія"},{"id":"2249","name":"ЕК Хірургічна техніка"}];
      responseHelper.operationSuccess(res, responseSample);

      // request({
      //   method,
      //   url,
      //   data: { id: courseId, lang: 1 },
      // })
      //   .then(({ data }) => {
      //     const normalizedData = pickArrayFields(data, ['id', 'name']);
      //     responseHelper.operationSuccess(res, normalizedData);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     responseHelper.oparationFailed('Retrieveing subjects list error');
      //     // Todo add global error handler
      //   });
    });

  return router;
};

module.exports = facultyRoutes;
