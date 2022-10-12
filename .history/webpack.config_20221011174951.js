/* /* const { plugins } = require('@babel/preset-env/lib/plugins-compat-data'); */

/* 

const HtmlWebpackPlugin = require('Html-Webpack-Plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
    },
    mode :'development',
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
        new HtmlWebpackPlugin({
            template : './public/index.html',
            filename : './index.html'
        }),
    ]
}  */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist"), filename: '"bundle.js" '},
  mode: "development",
  resolve: { extensions: [".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      { test: /\.html$/, use: [{ loader: "html-loader" }] },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};
