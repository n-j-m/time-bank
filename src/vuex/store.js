import Vue from 'vue'
import Vuex from 'vuex'

import { rootRef } from 'time-bank'

Vue.use(Vuex)

const state = {
  auth: rootRef.getAuth(),
  error: null,
  processing: false,
  timers: {}
}

const mutations = {
  LOGIN(state, auth) {
    state.auth = auth
  },
  NAVIGATE(state, path) {
    state.route.path = path
  },
  ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  },
  PROCESSING(state, status) {
    state.processing = status
  },
  TIMER(state, id, timer) {
    mutations.CLEAR_TIMEOUT(state, id)
    state.timers[id] = timer
  },
  CLEAR_TIMEOUT(state, id) {
    const timer = state.timers[id]
    if (timer) {
      clearTimeout(timer)
    }
    delete state.timers[id]
  }
}

export default new Vuex.Store({
  state,
  mutations
})