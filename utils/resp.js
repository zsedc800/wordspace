exports.responseClient = function (res, status = 500, code = 2, msg = 'server inner error', data = null) {
  res.status(status).json({
    code,
    msg,
    data
  });
};

exports.paramCollect = function (param) {
  let obj = {};
  Object.keys(param).forEach(key => {
    if (!!param[key]) {
      obj[key] = param[key];
    }
  });
};