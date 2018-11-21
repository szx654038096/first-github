// 入口文件
import Vue from 'vue'

// 导入 MUI 样式
import './lib/mui/css/mui.min.css'

// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// 导入根组件
import app from './App.vue'

// 创建 Vue 实例对象
var vm = new Vue({
  el:'#app',
  data: {},
  render:c => c(app)
})