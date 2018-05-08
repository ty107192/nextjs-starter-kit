/* eslint no-multi-assign: "off" */
const nextRoutes = require('next-routes');
const rules = require('./config');

const routes = module.exports = nextRoutes();

rules.map((row, index) => {
    routes.add({name: row.name, pattern: row.pattern, page: row.page});
    return true;
});
