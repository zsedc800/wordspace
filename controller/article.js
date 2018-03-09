const articleServ = require('../services/article');
const { responseClient, paramCollect } = require('../utils/resp');
const logger = require('../utils/logger').getLogger('controller/article');
exports.delete = async function (req, res, next) {
  let articleId = req.params.id;
  try {
    await articleServ.delete(articleId)
  } catch (e) {
    logger.error('删除文档出错 ', e.message);
    return responseClient(res, 500, 2, '删除失败', { err: e.message });
  }
  responseClient(res, 200, 0, 'success');
};
exports.update = async function (req, res, next) {
  let id = req.params.id;
  let updateInfo = paramCollect(req.body);
  try {
    await articleServ.update(id, updateInfo);
  } catch (e) {
    logger.error('更新文档失败 ', e.message);
    return responseClient(res, 500, 2, '更新失败', { err: e.message });
  }
  responseClient(res, 200, 0, 'success');
};

exports.index = async function (req, res, next) {
  let articles, opts = {};
  let { page } = req.query;
  let pageSize = 5;
  opts.skip = (page - 1) * pageSize;
  opts.limit = pageSize;
  opts.condition = {};
  try {
    articles = await articleServ.getAll(opts)
  } catch (e) {
    logger.error('error throw when get articles ', e.message);
    return next(e);
  }
  responseClient(res, 200, 0, 'success', articles);
}

exports.create = function (req, res, next) {
  let article = paramCollect(req.body);
  articleServ.create(article).then(result => {
    responseClient(res, 200, 0, 'success');
  }).catch(err => {
    logger.error('article create failed error is : ', err.message);
    return next(err);
  });
};

exports.show = async function (req, res, next) {
  let id = req.params.id;
  let article;
  try {
    article = await articleServ.getDetail(id);
  } catch (e) {
    logger.error('article not found');
    return responseClient(res, 500, 2, 'article not found', { err: e.message });
  }
  responseClient(res, 200, 0, 'success', article);
}
