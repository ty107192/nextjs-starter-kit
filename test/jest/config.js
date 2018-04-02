const path = require('path');

// module.exports = {
//     rootDir: ".",
//     setupFiles: ['<rootDir>/setup.js'],
//     testPathIgnorePatterns: [path.resolve(__dirname, '../../.next/'), path.resolve(__dirname, '../../node_modules/')]
// };
const appRoot = path.resolve(__dirname);
module.exports = require('@talentui/jest-config')({
    roots: [appRoot],
    setupFiles: ['<rootDir>/setup.js']
});