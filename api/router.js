module.exports = function(app) {
  app.use('/vote', require('./controllers/vote'))
}
