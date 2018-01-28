const responseHelper = require('../util/responseHelper');
const request = require('../util/request');
const dataRoutes = require('../const/dataRoutes');
const pickArrayFields = require('../util/pickArrayFields');

const courseRoutes = router => {
  router.route('/course/list')
    .get((req, res, next) => {
      const { method, url } = dataRoutes.category;
      const { facultyId } = req.query;

      request({
        method,
        url,
        data: { id: facultyId, lang: 1 },
      })
        .then(({ data }) => {
          const normalizedData = pickArrayFields(data, ['id', 'name']);
          responseHelper.operationSuccess(res, normalizedData);
        })
        .catch((err) => {
          console.log(err);
          responseHelper.oparationFailed('Retrieveing faculties list error');
          // Todo add global error handler
        });
    });

  return router;
};

module.exports = courseRoutes;