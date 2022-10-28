const mutations = {
  setGameStatus (state, payload) {
    state.gameStatus = payload
  },
  generateSchedule (state, payload) {
    state.schedule = payload
    state.activeLap = 0
  },
  setActiveLap (state, payload) {
    state.activeLap = state.activeLap + 1
  },
  setActiveLapResult(state, payload){
    if(!state.schedule.results[state.activeLap].results.find(item => item.number === payload.number)){
      state.schedule.results[state.activeLap].results.push(payload)
    }
  }
}

export default mutations
