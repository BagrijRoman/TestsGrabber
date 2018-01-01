const axios = require('axios');

const responseHelper = require('../../util/responseHelper');

const dataRoutes = require('../../const/dataRoutes');

const facultyRoutes = router => {
  router.route('/faculty/list')
    .get((req, res, next) => {
      const { method, url } = dataRoutes.faculty;

      axios({
        method,
        url,
        data: {
          id: 0,
          lang: 1,
        }
      })
        .then((response) => {
          res.send(response.data);
        })
        .catch((err) => {
          console.log('ERROR !!!!!!!!!!!!!!!!!!!!!!!');
          console.log(err.reason);
          res.send('!!!!!!!!!!!!!!error');
        });
    });

  return router;
};

module.exports = facultyRoutes;
