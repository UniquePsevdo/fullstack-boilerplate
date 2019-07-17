const app = require('./backend/app');
const http = require('http');
const logger = require('./backend/config/logger');
const { db } = require('./backend/config/vars');
const mongoose = require('mongoose');
const connection = connect();

mongoose.set('useCreateIndex', true);

const normalizePort = val => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  logger.info(`Express app started on port ${port}`);
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);

connection
  .on('error', logger.error)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  server.listen(port);
}

function connect() {
  var options = { keepAlive: 1, useNewUrlParser: true };
  mongoose.connect(db, options);
  return mongoose.connection;
}
