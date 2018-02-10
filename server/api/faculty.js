const responseHelper = require('../util/responseHelper');
const request = require('../util/request');
const dataRoutes = require('../const/dataRoutes');
const pickArrayFields = require('../util/pickArrayFields');

const facultyRoutes = router => {
  router.route('/faculty/list')
    .get((req, res, next) => {
      const { method, url } = dataRoutes.category;

      request({
        method,
        url,
        data: { id: 0, lang: 1 },
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

module.exports = facultyRoutes;
