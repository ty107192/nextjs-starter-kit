/* eslint no-multi-assign: "off" */
const rules = [
    {name: 'home', pattern: '/', page: 'home'},
    {name: 'comics', pattern: '/comics', page: 'comics/home'},
    {name: 'comics-detail', pattern: '/comics/:id', page: 'comics/detail'},
    {name: 'game', pattern: '/game', page: 'game'}
];

module.exports = rules;
