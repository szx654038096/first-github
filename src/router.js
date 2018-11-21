// 路由文件
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

// 创建路有对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', component: HomeContainer },
    { path: '/Home', component: HomeContainer },
    { path: '/Member', component: MemberContainer },
    { path: '/Shopcar', component: ShopcarContainer },
    { path: '/Search', component: SearchContainer }
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router