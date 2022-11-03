const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const HtmlWebpackPlugin = require('HtmlWebpackPlugin
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
    },
    resolve: {
        extensions : ['.js', '.jsx'],

    },
    module : {
        rules:[
            {
                test : /\.(js|jsx)$/ ,
                exclude : /node_modules/,
                use: {
                    loader : 'babel-loader'
                }
            },
            {
                test:  /\.html$/,
                use : [
                    {
                        loader:'html-loader'
                    }
                ]
            }
        ]
    },


    plugins : [

    ]
}