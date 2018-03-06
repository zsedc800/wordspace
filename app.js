const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const Logger = require('./utils/logger');
const logger = Logger.getLogger('app');
const apiRouter = require('./api_router');

const config = require('./config');

const app = express();


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');

app.use(Logger.connectLogger(Logger.getLogger(), { level: Logger.levels.INFO }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config['cookie_secret']));
app.use(session({
  secret: config['session_secret'],
  key: config['auth_cookie_name'],
  cookie: {
    maxAge: 1000 * 3600 * 24 * 7,
    httpOnly: true
  },
  resave: true,
  saveUninitialized: true
}));

app.use('/api/v1', apiRouter);

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? {} : err;
  res.status(err.status || 500);
  res.render('error');
});

if (!module.parent) {
  app.listen(config.port, function () {
    logger.info('server start at ' + config.port);
  });
}

module.exports = app;
