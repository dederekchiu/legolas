const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        SRC_DIR,
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
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
        contentBase: SRC_DIR,
        hot: true,
        compress: true
    }
};
