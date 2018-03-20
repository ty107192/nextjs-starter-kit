/* eslint no-multi-assign: "off" */
const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add({name: 'home', pattern: '/', page: 'app/home'});
routes.add({name: 'news', pattern: '/news', page: 'app/news/home'});
routes.add({name: 'news-detail', pattern: '/news/:id', page: 'app/news/detail'});
routes.add({name: 'about', pattern: '/about', page: 'app/about'});
