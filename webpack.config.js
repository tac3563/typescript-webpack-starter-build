const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: '[name][ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            // {
            //     test:/\.(js|ts)$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //     },
            // },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test:/\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            }
        ],
    },

    devtool: false,
}