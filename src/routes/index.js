/* eslint no-multi-assign: "off" */
const nextRoutes = require('next-routes');
const rules = require('./web');

const routes = module.exports = nextRoutes();

rules.map(function (row, index) {
    routes.add({name: row.name, pattern: row.pattern, page: row.page});
});
