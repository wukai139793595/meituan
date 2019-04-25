import Vue from 'vue'
import Vuex from 'vuex'
import position from './modules/position.js'
import user from './modules/user.js'


Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    position,
    user
  }
})
