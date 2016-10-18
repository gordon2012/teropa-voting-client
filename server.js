var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    contentBase: contentBase,
    publicPath: config.output.publicPath,
    hot: true//,
    // historyApiFallback: true
});

server.app.use(function pushStateHook(req, res, next) {
    var ext = path.extname(req.url);
    if((ext === '' || ext === '.html') && req.url != '/') {
        req.pipe(request(localURL)).pipe(res);
    } else {
        next();
    }
});

// .listen(8080, 'localhost', function(err, result) {
//     console.log('Listening at http://localhost:8080/');
// });
