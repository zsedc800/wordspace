const userServ = require('../services/user');
const Logger = require('../utils/logger');
const logger = Logger.getLogger('contorller/user');
const { responseClient, paramCollect } = require('../utils/resp');
exports.show = async function (req, res, next) {
  let loginname = req.params.loginname;
  let userInfo;
  try {
    userInfo = await userServ.get({ userName: loginname });
  } catch (e) {
    logger.error('用户信息查询失败 ', e.message);
    return responseClient(res, 500, 2, '用户信息查询失败', { err: e.message });
  }
  responseClient(res, 200, 0, 'success', { userInfo });
};

exports.update = async function (req, res, next) {
  let id = req.params.id;
  let updateInfo = paramCollect.call(logger, req.body);
  try {
    await userServ.update({ _id: id }, updateInfo);
  } catch (e) {
    logger.error('更新用户失败 ', e.message);
    return responseClient(res, 500, 2, '更新用户失败', { err: e.message });
  }
  responseClient(res, 200, 0, 'success');
};

exports.create = async function (req, res, next) {
  let userInfo = paramCollect.call(logger, req.body);
  try {
    await userServ.create(userInfo);
  } catch (e) {
    logger.error('用户创建失败 ', e.message);
    return responseClient(res, 500, 2, '用户创建失败', { err: e.message });
  }
  responseClient(res, 200, 0, 'success');
};

exports.delete = async function (req, res, next) {
  let userId = req.params.id;
  try {
    await userServ.delete(userId);
  } catch (e) {
    logger.error('用户删除失败 ', e.message);
    return responseClient(res, 500, 2, '用户删除失败', { err: e.message });
  }
  responseClient(res, 200, 0, 'success');
};
