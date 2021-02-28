'use strict';

exports.Logger = (name) => {
    return {
        // eslint-disable-next-line no-console
        info: (message) => console.info(`[${name}] [INFO]: ${message}`),
        // eslint-disable-next-line no-console
        warn: (message) => console.warn(`[${name}] [WARN]: ${message}`),
        // eslint-disable-next-line no-console
        error: (message) => console.error(`[${name}] [ERROR]: ${message}`)
    };
};
