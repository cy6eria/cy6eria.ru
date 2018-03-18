const path = require('path');

module.exports = {
    target: 'node',
    context: path.resolve(__dirname),
    entry: {
        app: [ path.resolve(__dirname, './run-server.js') ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'run-server.production.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:   /\.(css|scss)$/,
                use: [ 'ignore-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    externals: ['tedious', 'pg-hstore'],
    optimization: {
        minimize: false
    }
};
