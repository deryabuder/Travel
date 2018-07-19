// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，
// 这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick。
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// css重设让所有浏览器都按照同样的规则解释CSS，这样就能避免发生这种问题。
import 'styles/reset.css'
// 不同的手机又不同的像素密度，css中的1px并不等于移动设备中的1px
import 'styles/border.css'
import 'styles/iconfont.css'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  // 挂载点是index.html中的div元素
  el: '#app',
  router,
  store,
  // 局部组件App
  components: {
    App
  },
  template: '<App/>'
})
