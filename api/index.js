const app = require('./app')
const http = require('http').Server(app);
const PORT = 3500;

http.listen(PORT, function () {
  console.log('Server listening on api port:', PORT);
})
