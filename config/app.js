const dotEnv = require('dotenv');

dotEnv.config();
const env = process.env;

const config = {
    hostPort: env.PORT || 3001,
    hostUrl: env.HOST_URL || '',
    assetUrl: env.ASSET_URL || '',
    env: env.NODE_ENV || 'dev',
    cors: {
        whitelist: ['localhost:9001'], // storybook
        credentials: true // 是否允許發送Cookie給伺服器 (Access-Control-Allow-Credentials)
    }
};

module.exports = config;
