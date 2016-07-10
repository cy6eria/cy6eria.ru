var path = require('path');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, './src/index.tsx')
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/')
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist')
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devtool: "source-map",
    resolve: {
        root: path.resolve(__dirname),
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }
};
