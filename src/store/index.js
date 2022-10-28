import Vue from 'vue'
import Vuex from 'vuex'
import gameStates from './game/index'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      gameStates: gameStates,
    }
  })
}

export default createStore
