const path = require ('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === ' development'
});

module.exports = {

    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env', 'react']
                  }
                }
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: 'pre', 
                test: /\.js$/, 
                loader: 'source-map-loader' 
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                use: [
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'sass-loader'
                    }
                ],
                // use style-loader in development
                fallback: 'style-loader'
            })
        }]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    plugins: [
        extractSass,
        new CopyWebpackPlugin([
            { context: 'public', from: '**/*' }
        ]),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false,
          },
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ],
};