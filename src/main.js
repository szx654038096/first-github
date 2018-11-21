// 入口文件
import Vue from 'vue'
// 导入路由包
import VueRouter from 'vue-router'
// 手动安装路由
Vue.use(VueRouter)

// 导入 vue-resource
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)

// 导入 MUI 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入自己的 router.js 路由模块
import router from './router.js'

// 导入根组件
import app from './App.vue'

// 创建 Vue 实例对象
var vm = new Vue({
  el:'#app',
  data: {},
  render:c => c(app),
  router // 挂在路由
})