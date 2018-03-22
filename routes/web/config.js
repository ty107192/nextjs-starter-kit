/* eslint no-multi-assign: "off" */
const rules = [
    {name: 'home', pattern: '/', page: 'home'},
    {name: 'news', pattern: '/news', page: 'news/home'},
    {name: 'news-detail', pattern: '/news/:id', page: 'news/detail'},
    {name: 'about', pattern: '/about', page: 'about'}
];

module.exports = rules;
