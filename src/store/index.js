import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 组件调用actions，actions调用mutations，mutations改变数据
// 创建store，并作为默认值导出
export default new Vuex.Store({
  state,
  mutations
})
