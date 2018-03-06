const { User } = require('../models');
exports.get = function (condition) {
  return User.findOne(condition);
}
exports.update = function (where, update) {
  return User.update(where, update);
};

exports.create = function (userInfo) {
  let user = new User(userInfo);
  return user.save();
};

exports.delete = function (id) {
  return User.findByIdAndRemove(id);
};
