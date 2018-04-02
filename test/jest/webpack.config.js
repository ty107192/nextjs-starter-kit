module.exports = {
    rules: [
        {
            test: /\.scss$/,
            include: [
                path.resolve(__dirname, "../../src/resources/assets/sass")
            ],
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "sass-loader"}
            ]
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }
    ]
};