const statusCodes = require('../const/statusCodes');

const response = (res, status = statusCodes.OK, data, message) => {
  res.status(status);
  if (data) {
    res.json(data);
  }
  if (message) {
    res.send(message);
  }
  res.end();
};


const responseHelper = {
  operationSuccess: (res, data) => response(res, statusCodes.OK, data),
  oparationFailed: (res, message = 'Internal server error') =>
    response(res, statusCodes.INTERNAL_SERVER_ERROR, null, message),
};

module.exports = responseHelper;
