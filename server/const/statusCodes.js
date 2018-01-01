/*
  200 - OK
  201 - Created
  204 - No content
  400 - Bad Request
  401 - Unauthorized
  403 - Forbidden
  404 - Not Found
  500 - Internal Server Error
  502 - Bad Gateway
*/

const statusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
};

module.exports = statusCodes;
