var path = require('path');
var webpack = require('webpack');
var production = (process.env.NODE_ENV === 'production');

var bundle = ['./resources/index'];
var plugins = [
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'js/vendor.js'})
];
var jsLoaders = ['babel-loader'];

if (production) {
    plugins.unshift(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
} else {
    bundle.unshift(
        'webpack-dev-server/client?http://0.0.0.0:9000',
        'webpack/hot/only-dev-server'
    );
    plugins.unshift(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

var webpackConfig = {
    entry: {
        bundle: bundle,
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'js/[name].js',
        publicPath: 'http://localhost:9000/'
    },
    plugins: plugins,
    resolve: {
        alias: {
            'assets': path.join(__dirname, 'resources/')
        },
        extensions: [ '.js', '.jsx', '.es6', '.less', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|es6|js)$/,
                exclude: /node_modules/,
                loaders: jsLoaders
            },
            {
                test: /\.(less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
};

module.exports = webpackConfig;
