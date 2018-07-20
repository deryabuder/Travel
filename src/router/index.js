import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

// 异步组件实现按需加载(在路由中实现)
// 当项目非常庞大时才需要使用异步组件，现在使用反而降低了性能
// 路由就是根据网址的不同，返回不同的内容给用户
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
    // component: import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: City
    // component: import('@/pages/city/City')
  }, {
    // 动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
    // component: import('@/pages/detail/Detail')
  }],
  // 每次进入新的路由页面时，令x轴 y轴初始化为0
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
