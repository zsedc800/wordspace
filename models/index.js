const mongoose = require('mongoose');
const Logger = require('../utils/logger');
const config = require('../config');
const Article = require('./article');
const User = require('./user');
const logger = Logger.getLogger('models/index');

mongoose.connect(config.db, {
}, (err) => {
  if (err) {
    logger.error('connect to %s error', config.db, err.message);
    process.exit(1);
  }
});

module.exports = {
  User,
  Article
};