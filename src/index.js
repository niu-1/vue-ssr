// 入口文件
import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.css'

const root = document.createElement('div')
document.body.appendChild(root)

// 将.vue文件加入到入口文件中
new Vue({
  render: (h) => h(App)
}).$mount(root)