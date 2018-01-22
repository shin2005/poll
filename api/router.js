module.exports = function(app) {
  app.use('/user', require('./controllers/user'));
  app.use('/vote', require('./controllers/vote'));
};
