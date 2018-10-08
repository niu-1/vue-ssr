// 配置同时用在开发环境和正式环境，因此需要一个判断
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

// 设置变量
const idDev = process.env.NODE_ENV === "development"

module.exports = {
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
        test: /.vue$/,
        loader: 'vue-loader'
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
    new VueLoaderPlugin()
  ]
}