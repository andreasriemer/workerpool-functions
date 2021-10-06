const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        index: './lib/functions/index.js',
        workerValueFromPath: './lib/functions/workerValueFromPath.js',
        workerContainsValue: './lib/functions/workerContainsValue.js',
        workerSort: './lib/functions/workerSort.js',
        workerFilter: './lib/functions/workerFilter.js',
        workerSearch: './lib/functions/workerSearch.js',
    },
    output: {
        filename: (pathData) => {
            return pathData.chunk.name === 'index' ? 'workerpool-functions.full.min.js' : 'functions/[name].min.js';
        },
        path: path.resolve(__dirname, 'lib/worker'),
        library: {
            type: "umd"
        },
    },
    optimization: { 
        minimize: true,
    },
    target: 'web',
    mode: 'production',
    plugins: [
        new CopyPlugin({
        patterns: [
            { from: path.resolve(__dirname, 'src/workerpool-functions.worker.js'), to: path.resolve(__dirname, 'lib/worker') },
            { from: path.resolve(__dirname, 'node_modules/workerpool/dist/workerpool.min.js'), to: path.resolve(__dirname, 'lib/worker') },
        ],
        }),
    ],
};