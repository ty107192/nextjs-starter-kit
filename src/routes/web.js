/* eslint no-multi-assign: "off" */
const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add({name: 'home', pattern: '/home', page: 'app/home'});
routes.add({name: 'router', pattern: '/router', page: 'app/router'});
routes.add({name: 'router-id', pattern: '/router/:id', page: 'app/router'});
routes.add({name: 'i18next', pattern: '/i18next', page: 'app/i18next'});
