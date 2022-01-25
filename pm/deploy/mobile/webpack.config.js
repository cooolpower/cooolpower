/* eslint-disable no-unused-vars */
const cssExports = require("./css-config"); // css config object
const jsExports = require("./js-config"); // js config object
// const imgExports = require("./img-config"); // img config object

// Return Array of Configurations
module.exports = [
    cssExports.search.smartmatch,
    cssExports.user.smartmatch,
    jsExports.search_smartmatch
];
