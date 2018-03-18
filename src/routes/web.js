/* eslint no-multi-assign: "off" */
const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add({name: 'test', pattern: '/test', page: 'app/test'});
routes.add({name: 'test-detail', pattern: '/test/:id', page: 'app/test'});
