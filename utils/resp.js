exports.responseClient = function (res, status = 500, code = 2, msg = 'server inner error', data = {}) {
  res.status(status).json({
    code,
    msg,
    data
  });
};