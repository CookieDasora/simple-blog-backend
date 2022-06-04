/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const app = require('./app');
const Console = require('./Lib/Console');
// Imported database to run the initialization
const Database = require('./Lib/Database');

const server = app.listen(process.env.PORT || 8080, () => { Console.info('Server open'); });

// Windows and Linux graceful shutdown

process.on('SIGTERM', () => {
  Console.warn('SIGTERM signal received: Closing server');
  mongoose.disconnect();
  server.close(() => {
    Console.warn('Server closed');
  });
});

process.on('message', (msg) => {
  if (msg === 'shutdown') {
    Console.warn('SHUTDOWN message received: Closing Server');
    mongoose.disconnect();
    server.close(() => {
      Console.warn('Server closed');
    });
  }
});
