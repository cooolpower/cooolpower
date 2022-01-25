// webpack.config.js

/* eslint-disable no-unused-vars */
const cssExports = require("./css-config"); // css config object
const jsExports = require("./js-config"); // js config object_
const imgExports = require("./img-config"); // img config object

// Return Array of Configurations
module.exports = [
    cssExports.event.check
];
