const mongoose = require('mongoose');
const Console = require('./Console');

const Database = mongoose.connect(process.env.DB_URL)
  .catch((error) => {
    Console.error(`Error connecting to database:\n${error}`);
    mongoose.disconnect();
  })
  .then(() => {
    Console.info('MongoDB Connected');
  });

module.exports = Database;
