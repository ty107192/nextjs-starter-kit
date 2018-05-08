/* eslint no-multi-assign: "off" */
const rules = [
    {name: 'home', pattern: '/', page: 'view/home'},
    {name: 'comics', pattern: '/comics', page: 'view/comics/home'},
    {name: 'comics-detail', pattern: '/comics/:id', page: 'view/comics/detail'},
    {name: 'game', pattern: '/game', page: 'view/game'}
];

module.exports = rules;
