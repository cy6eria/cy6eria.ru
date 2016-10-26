var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, './src/index.tsx')
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/')
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test:   /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css!sass!postcss")
            }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },
    devtool: "source-map",
    resolve: {
        root: path.resolve(__dirname),
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};
