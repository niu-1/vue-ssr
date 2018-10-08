// 配置同时用在开发环境和正式环境，因此需要一个判断
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// 设置变量
const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode:"development",
  // 前面半部分获得根目录，和后面的路径进行拼接，得到绝对路径
  entry: path.join(__dirname,'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(gif|jpg|jpeg|png|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:1024,
              // 输出的图片名字以及扩展名
              name:'[name].[ext]'  
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HTMLPlugin(),
    new webpack.DefinePlugin({
      "process.env":{
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    })
  ]
}
if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'; 
  config.devServer = {
    port:'8000',
    host:'0.0.0.0',
    overlay:{
    // 如果有任何错误，都显示到网页上面
      errors:true,
    },
    // 启动webpack-devServer时自动打开浏览器
    // open:true,
    // historyFallback:{

    // },
    // 改了哪个组件，页面只是重新渲染这个组件，不会让整个页面重新加载
    hot:true,
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config;