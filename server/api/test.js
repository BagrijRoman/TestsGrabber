const responseHelper = require('../util/responseHelper');
const request = require('../util/request');
const getTestInstance = require ('../util/getTestInstance');
const dataRoutes = require('../const/dataRoutes');
const pickArrayFields = require('../util/pickArrayFields');

const facultyRoutes = router => {
  router.route('/test/list')
    .get((req, res) => {
      const { method, url } = dataRoutes.category;
      const { subjectId } = req.query;

      request({
        method,
        url,
        data: { id: subjectId, lang: 1 },
      })
        .then(({ data }) => {
          const normalizedData = pickArrayFields(data, ['id', 'name']);
          responseHelper.operationSuccess(res, normalizedData);
        })
        .catch((err) => {
          console.log(err);
          responseHelper.oparationFailed('Retrieveing tests list error');
        });
    });

  router.route('/test/instance')
    .get((req, res) => {
      const { testId } = req.query;
      getTestInstance(testId)
        .then((result) => {
          responseHelper.operationSuccess(res, result);
        })
        .catch((err) => {
          console.log(err);
          responseHelper.oparationFailed('Retrieveing test instance error');
        });
    });

  return router;
};

module.exports = facultyRoutes;
