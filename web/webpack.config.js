var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');
var IP = 'localhost';
var PORT = '3000';

var ROOT_PATH = process.cwd();
var SRC_PATH = path.join(ROOT_PATH,'src');
var isExisted = fs.existsSync(SRC_PATH);

SRC_PATH = isExisted ? SRC_PATH : ROOT_PATH;
module.exports = {
    entry: [
        './index.web'
    ],
    ip: IP,
    resolve: {
        alias: {
            'react-native': 'MolesWeb'
        },
        extensions: ['', '.js', '.jsx'],
    },
    contentBase: path.join(ROOT_PATH, 'web/output'),
    port: PORT,
    output: {
        path: path.join(ROOT_PATH, 'web/output'),
        filename: 'bundle.js',
        //publicPath: ''
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new HasteResolverPlugin({
            platform: 'web',
            nodeModules: ['moles-web']
        }),
        new HtmlPlugin({
            title: 'Moles Project',
            template: path.join(process.cwd(), 'web/template/index.html'), // Load a custom template
            inject: 'body' // Inject all scripts into the body
        })
    ],
    module: {
        loaders: [{
            test: /\.png$/,
            loader: 'url?limit=10000000&mimetype=image/png',
            include: [SRC_PATH],
        }, {
            test: /\.jpg$/,
            loader: 'url?limit=10000000&mimetype=image/jpg',
            include: [SRC_PATH]
        }, {
            test: /\.json$/,
            loader: 'json',
        }, {
            test: /\.jsx?$/,
            // exclude:/node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-1']//先后顺序不能错,否则有些语法转换会报错
            },
            include: [path.join(ROOT_PATH, 'index.web.js'),SRC_PATH]
        }]
    }
};
