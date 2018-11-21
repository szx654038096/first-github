const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:path.join(__dirname, './src/main.js'), // 入口文件地址

  output: {
    path:path.join(__dirname, './dist'),
    filename:'bundle.js'
  },

  devServer:{
    open:true,
    port:3000,
    contentBase:'src',
    hot:true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:path.join(__dirname, './src/index.html'),
      filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],

  module:{
    rules:[
      {test:/\.css$/, use:['style-loader','css-loader']},
      {test:/\.less$/, use:['style-loader','css-loader','less-loader']},
      {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
      {test:/\.(jpg|ipeg|png|gif|bmp)/, use:'url-loader?limit=1024&name=[hash:8]-[name].[ext]'},
      {test:/\.(ttf|svg|woff|woff2|eot)/, use:'url-loader'},
      {test:/\.js$/, use:['babel-loader'],exclude:/node_modules/},
      {test:/\.vue$/, use:['vue-loader']}
    ]
  },

  resolve: {
    alias: {
      // "vue$":"vue/dist/vue.js"
    }
  },

  mode:'development'

}