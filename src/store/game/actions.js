const actions = {
  setGameStatus ({ commit }, payload) {
    commit('setGameStatus', payload)
  },
  generateSchedule({commit}, payload){
    commit('generateSchedule', payload)
  },
  setActiveLap({commit}, payload){
    commit('setActiveLap', payload)
  },
  setActiveLapResult({commit}, payload){
    commit('setActiveLapResult', payload)
  }
}

export default actions
