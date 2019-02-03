const path = require('path');

module.exports = {
    entry: "./webpack/src/index2.js",
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, 'webpack/dist')
    }
}