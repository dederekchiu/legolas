const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src', 'index.jsx');
const PUB_DIR = path.resolve(__dirname, 'public');
module.exports = {
    entry: [
        SRC_DIR,
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        },
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 8081,
        contentBase: path.join(__dirname, '/public'),
        hot: true,
        compress: true
    }
};
