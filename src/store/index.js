import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
  },
  mutations: {
    login(){
      console.log('====================================');
      console.log(1);
      console.log('====================================');
    }
  },
  actions: {
  },
  modules: {
  }
})
