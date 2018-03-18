// webpack設定至 next.config.js, 這裡設定為 webstorm 識別對應路徑

const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // CUSTOM PACKAGES:
            '@atoms': path.resolve(__dirname, 'src/components/atoms'),
            '@layouts': path.resolve(__dirname, 'src/components/layouts'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms'),
            '@theme': path.resolve(__dirname, 'src/components/theme'),
            '@hoc': path.resolve(__dirname, 'src/components/hoc'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@stores': path.resolve(__dirname, 'src/stores'),
            '@routes': path.resolve(__dirname, 'src/routes')
        }
    }
};
