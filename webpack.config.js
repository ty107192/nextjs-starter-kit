// webpack設定至 next.config.js, 這裡設定為 webstorm 識別對應路徑

const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // CUSTOM PACKAGES:
            '@components': path.resolve(__dirname, 'resources/components'),
            '@assets': path.resolve(__dirname, 'resources/assets'),
            '@utils': path.resolve(__dirname, 'app/utils'),
            '@modules': path.resolve(__dirname, 'app/modules'),
            '@stores': path.resolve(__dirname, 'storage/stores'),
            '@routes': path.resolve(__dirname, 'routes')
        }
    }
};
