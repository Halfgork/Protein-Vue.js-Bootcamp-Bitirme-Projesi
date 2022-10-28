const getters = {
  getGameStatus (state) {
    return state.gameStatus
  },
  getHorseList(state){
    return state.schedule.horses
  },
  getScheduleList(state){
    return state.schedule.rounds
  },
  getResults(state){
    return state.schedule.results
  },
  getActiveLap(state){
    return state.schedule.rounds[state.activeLap]
  },
}

export default getters
