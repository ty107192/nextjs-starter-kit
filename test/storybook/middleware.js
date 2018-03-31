const express = require('express');
const path = require('path');

module.exports = function (router) {
    router.use(
        '/lang',
        express.static(path.join(
            __dirname,
            '../../src/lang'
        ))
    );
};
