/* eslint no-multi-assign: "off" */
const rules = [
    {name: 'home', pattern: '/', page: 'home'},
    {name: 'news', pattern: '/news', page: 'news/home'},
    {name: 'news-detail', pattern: '/news/:id', page: 'news/detail'},
    {name: 'counter', pattern: '/counter', page: 'counter'}
];

module.exports = rules;
