import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated
  },
  mutations: {
    LOGIN(state) {
      state.isAuthenticated = true;
    },
    LOGOUT(state) {
      state.isAuthenticated = false;
    }
  },
  actions: {
    login({ commit }) {
      commit('LOGIN');
    },
    logout({ commit }) {
      commit('LOGOUT');
    }
  },
  modules: {
  }
})
