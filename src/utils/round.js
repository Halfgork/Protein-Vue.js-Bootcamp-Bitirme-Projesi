import { TRACKLENGTH } from '@/constants/trackSpecs'
import { getRandomNumbersFromArray } from '@/utils/functions'
import { GAMESTATUS } from '@/constants/labels'

export default class Round {

  constructor(list=[],
    trackLength = null,
    status= GAMESTATUS.NOTSTARTED
  ) {
    this.list = list
    this.trackLength = trackLength
    this.status = status
  }
  generate(horses) {
    let tracks = []
    for(let i=1; i<=10; i++){
      tracks.push({
        horses : this.getHorseListForTrack(horses),
        trackLength: TRACKLENGTH[i-1],
        status: GAMESTATUS.NOTSTARTED,
        lap: i,
        results: []
      })
    }
    return tracks
  }
  getHorseListForTrack(horses){
    let randomNumber = [...Array(21).keys()].slice(1)
    let trackHorses = []
    for(let i=1; i<=10; i++){
      let number= getRandomNumbersFromArray(randomNumber)
      let horse = horses[number-1]
      horse.position = '-'
      trackHorses.push(horses[number-1])
      randomNumber.splice(randomNumber.indexOf(number),1)
    }
    return trackHorses
  }
}
