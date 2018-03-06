const redis = require('redis');
const client = redis.createClient();

exports.get = function (key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, reply) => {
      if (err) {
        return reject(err);
      }
      resolve(reply.toString());
    });
  });
};

exports.set = function (key, value) {
  return new Promise((resolve, reject) => {
    client.set(key, value, (err, reply) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
