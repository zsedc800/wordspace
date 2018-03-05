const articleServ = require('../services/article');
const { responseClient } = require('../../utils/resp');
const logger = require('../../common/logger').getLogger('controller/article');
exports.delete = function () {

};

exports.update = function () {

};

exports.create = function (req, res, next) {
  let {
    content,
    title,
    author,
    description
  } = req.body;

  articleServ.create(req.body).then(result => {
    responseClient(res, 200, 0, 'success');
  }).catch(err => {
    logger.error('article create failed error is : ', err.message);
    return next(err);
  });
};
