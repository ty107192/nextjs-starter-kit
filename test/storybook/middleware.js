const express = require('express');
const path = require('path');

module.exports = (router) => {
    // 開放靜態資源路由
    router.use(
        '/static',
        express.static(path.join(
            __dirname,
            '../../static'
        ))
    );

    // 開放i18next語系字典檔案路由
    router.use(
        '/lang',
        express.static(path.join(
            __dirname,
            '../../src/lang'
        ))
    );
};
