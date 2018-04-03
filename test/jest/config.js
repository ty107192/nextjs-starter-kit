const path = require('path');

const appRoot = path.resolve(__dirname);
module.exports = require('@talentui/jest-config')({
    roots: [appRoot],
    setupFiles: ['<rootDir>/setup.js']
});
