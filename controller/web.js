const redisServ = require('../services/redis');
const { responseClient, paramCollect } = require('../utils/resp');
const Logger = require('../utils/logger');
const logger = Logger.getLogger('controller/web');
exports.index = async function (req, res, next) {
  let headImg, bio;
  try {
    headImg = await redisServ.get('headImg');
    bio = await redisServ.get('bio');
  } catch (e) {
    logger.error('redis search failed ', e.message);
    responseClient(res, 500, 2, 'redis search failed', { err: e.message });
  }
  responseClient(res, 200, 0, 'success', { headImg, bio });
};

exports.update = async function (req, res, next) {
  let opts = paramCollect(req.body);
  try {
    for (let key of Object.keys(opts)) {
      redisServ.set(key, opts[key]);
    }
  } catch (e) {
    logger.error('redis set failed ', e.message);
    return responseClient(res, 500, 2, 'redis set failed', { err: e.message });
  }
  responseClient(res, 200, 0, 'success');
};