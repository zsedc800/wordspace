const path = require('path');
let config = {
  db: 'mongodb://localhost/wordspace_dev',
  port: 8810,
  log_dir: path.join(__dirname, './logs'),
  session_secret: "your session key",
  cookie_secret: "your cookie key",
  auth_cookie_name: 'your session cookie key',
  list_article_size: 10,
  dev: {
    port: 3004,
    publicPath: '/static',
    assetsSubDir: ''
  },
  build: {
    assetsSubDir: ''
  }
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://localhost/wordspace_test';
}

module.exports = config;
