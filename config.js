let config = require('./config.default');
module.exports = Object.assign(config, {
  session_secret: "joe.zhou's session",
  cookie_secret: "joe.zhou's cookie",
  auth_cookie_name: 'joe',
});