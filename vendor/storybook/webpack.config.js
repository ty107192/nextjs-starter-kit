const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    storybookBaseConfig.module.rules.push(
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: path.resolve(__dirname, '../')
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
        },
        {
            test: /\.(woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                    limit: 5000,
                    mimetype: 'application/font-woff'
                }
            }
        },
        {
            test: /\.(ttf|eot|svg|png)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]'
                }
            }
        }

    );

    // Return the altered config
    return storybookBaseConfig;
};
