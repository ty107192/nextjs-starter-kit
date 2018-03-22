const dotEnv = require('dotenv');

dotEnv.config();
const env = process.env;

const config = {
    hostPort: env.PORT || 3001,
    hostUrl: env.HOST_URL || '',
    assetUrl: env.ASSET_URL || '',
    i18nDebug: env.I18N_DEBUG || false,
    env: env.NODE_ENV || 'dev'
};

module.exports = config;
