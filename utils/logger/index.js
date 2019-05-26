const { configure, getLogger } = require('log4js');

configure({
  appenders: {
    dashboard: {
      type: 'console',
    },
  },
  categories: {
    default: {
      appenders: ['dashboard'],
      level: process.env.LOG_LEVEL || 'trace',
    },
  },
});

const logger = getLogger('enter-your-app-name');

module.exports = logger;
