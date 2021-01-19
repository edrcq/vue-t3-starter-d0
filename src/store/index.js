import Vue from 'vue'
import Vuex from 'vuex'
import { getAll, getOne, save } from '../api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    list: [],
  },
  mutations: {
    // une mutation recois toujours state et payload en params
    setList(state, payload) {
      Vue.set(state, 'list', payload) // state.list = payload
    },
    setSomething(state, payload) {

    }
  },
  actions: { // methods
    // context = { state, commit, dispatch, .. }
    async blog_getAll(context) {
      const list = await getAll()
      context.commit('setList', list)
      // context = this.$store
    },
    actionTest(context, payload) {
      console.log(12, payload)
    }
  },
  getters: { // computed
    getOne(state) {
      return (id) => {
        return state.list.find(listElement => listElement.id === id)
      }
    }
  },
  modules: {
  }
})
