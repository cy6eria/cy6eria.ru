module.exports = {
    apps: [
        {
            name: 'cy6eria',
            script: './server.js',
            watch: false,
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
