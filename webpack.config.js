var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        'vendor': ['angular', 'angular-ui-router'],
        'app': ['./client/app/app.js']
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    output: {
        path: './client/build',
        filename: '[name].bundle.js',
        chunkFilename: '[name]_[chunkhash].js'
    },
    plugins: [
        // common modules shared between entry points.
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        // optimize bundled chunk modules
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            // default is true, on mangling enabled will break angular dependency injection, so is set to false
            mangle: false,
            sourcemap: true,
            minimize: true,
            comments: false
        }),
        new OpenBrowserPlugin()  
    ],
    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'source-map-loader' }
        ],
        loaders: [ 
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", include: path.join(__dirname, 'client/app') },
            { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/] },
            { test: /\.(html|css)$/, loader: 'raw-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            { test: /\.(jpg|png)$/, loader: 'url?limit=25000'}
        ]
    },
    // configures webpack-dev-server
    devServer: {
        historyApiFallback: true,
        // redirectts to api server on api calls
        proxy: {
            "/api/*": {
                target: "http://localhost:9000"
            }
        }
    }
};
