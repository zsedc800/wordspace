let config = require('./config.default');
process.env.NODE_ENV === 'production' ? config['db'] = 'mongodb://localhost/wordspace' : void(0);
module.exports = Object.assign(config, {
  session_secret: "joe.zhou's session",
  cookie_secret: "joe.zhou's cookie",
  auth_cookie_name: 'joe',
});
