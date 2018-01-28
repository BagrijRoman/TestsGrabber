const responseHelper = require('../util/responseHelper');
const request = require('../util/request');
const dataRoutes = require('../const/dataRoutes');
const pickArrayFields = require('../util/pickArrayFields');

const facultyRoutes = router => {
  router.route('/subject/list')
    .get((req, res, next) => {
      const { method, url } = dataRoutes.category;
      const { courseId } = req.query;

      request({
        method,
        url,
        data: { id: courseId, lang: 1 },
      })
        .then(({ data }) => {
          const normalizedData = pickArrayFields(data, ['id', 'name']);
          responseHelper.operationSuccess(res, normalizedData);
        })
        .catch((err) => {
          console.log(err);
          responseHelper.oparationFailed('Retrieveing subjects list error');
          // Todo add global error handler
        });
    });

  return router;
};

module.exports = facultyRoutes;
