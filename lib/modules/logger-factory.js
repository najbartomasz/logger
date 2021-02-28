'use strict';

const { Logger } = require('./logger');

exports.loggerFactory = {
    create: (name) => Logger(name)
};
