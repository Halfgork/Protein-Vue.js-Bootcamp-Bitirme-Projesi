import { GAMESTATUS } from '@/constants/labels'

const state = {
  namespaced: true,
  namespace: true,
  gameStatus: GAMESTATUS.NOTSTARTED,
  schedule: {
    horses: [],
    rounds: [],
    results: []
  },
  activeLap: 0
}

export default state
