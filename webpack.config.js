const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    devtool: "source-map",
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name].[contenthash][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, './dist'),
        compress: true,
        port: 3000,
        hot: true,
        client: {
            logging: 'none'
        }
    },
};
