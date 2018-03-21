/* eslint no-multi-assign: "off" */
const rules = [
    {name: 'home', pattern: '/', page: 'app/home'},
    {name: 'news', pattern: '/news', page: 'app/news/home'},
    {name: 'news-detail', pattern: '/news/:id', page: 'app/news/detail'},
    {name: 'about', pattern: '/about', page: 'app/about'}
];

module.exports = rules;
