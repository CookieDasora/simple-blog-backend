const { createLogger, transports, format } = require('winston');

const Console = createLogger({
  format: format.combine(
    format.splat(),
    format.simple(),
  ),
  transports: [new transports.Console()],
});

module.exports = Console;
