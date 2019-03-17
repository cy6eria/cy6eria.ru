const withSass = require('@zeit/next-sass');

const { port } = require('./serverConfig');

module.exports = {
    ...withSass(),
    env: {
        port
    },
};
