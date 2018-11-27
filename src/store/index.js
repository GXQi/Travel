import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex /* { default global options } */)

export default new Vuex.Store({
  state,
  mutations
})
