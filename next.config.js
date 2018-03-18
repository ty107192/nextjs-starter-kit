require('dotenv').config();
const dotEnv = require('dotenv-webpack');

const path = require('path');
const webRouter = require('./src/routes/web');
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    assetPrefix: process.env.PROXY_URL ? process.env.PROXY_URL : '', //PROXY_URL路徑
    useFileSystemPublicRoutes: false,//使用文件系統路由
    exportPathMap: webRouter,
    webpack: function (config) {
        config.node = {
            fs: "empty"
        };

        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new dotEnv({
                path: path.join(__dirname, '.env'),
                systemvars: true,
            }),
        ];

        return config
    }
});