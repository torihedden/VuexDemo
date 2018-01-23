// TODO: add "highest score ever" bit and have it only
// communicate with the count?

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// For example, one can use vuex-persistedstate:
// This is a plugin for vuex to handle and store state between page refreshes.

const state = {
  count: 0,
  automaticPoints: false,
  autoPointGainFactor: 1,
  pointInterval: null,
  has100Points: false
}

const getters = {
  greaterThanTen: state => state.count >= 10 ? 'a lot (10 or more)' : 'less than 10. That\'s not a lot of points',
  has100Points: state => {
    if (state.count >= 100) {
      state.autoPointGainFactor = 2
      return true
    } else {
      state.autoPointGainFactor = 1
      return false
    }
  }
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  resetCount (state) {
    state.count = 0
  },
  toggleAutoPoints (state) {
    state.automaticPoints = !state.automaticPoints
    if (state.automaticPoints) {
      state.pointInterval = setInterval(() => {
        state.count += state.autoPointGainFactor
      }, 1000)
    } else {
      clearInterval(state.pointInterval)
    }
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  resetCount: ({ commit }) => commit('resetCount'),
  toggleAutoPoints: ({ commit }) => commit('toggleAutoPoints'),
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// To make sure that the defined Getter is part of the Store,
// we need to add this Getters to the store configuration object
// which is passed to the call of Vuex.Store at the end of the file:

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
