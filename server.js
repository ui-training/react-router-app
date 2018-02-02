var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    publicPath: 'http://localhost:9000/',
    contentBase: './app',
    hot: true,
    noInfo: true
});

server.listen(9000, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:9000');
});
