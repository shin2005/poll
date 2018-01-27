module.exports = function(app) {
  app.use('/users', require('./controllers/users'));
  app.use('/polls', require('./controllers/polls'));
};
