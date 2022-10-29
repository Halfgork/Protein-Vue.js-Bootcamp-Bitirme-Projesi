import {generateRandomColor, getRandomNumber, randomNameGenerator, getRandomNumbersFromArray } from '@/utils/functions'
import { GAMESTATUS } from '@/constants/labels'

export default class Horse {

  constructor(color=  null,
    number=  null,
    condition= null,
    name=  null,
    numbers= [...Array(21).keys()].slice(1)
  ) {
    this.color = color
    this.number = number
    this.condition = condition
    this.name = name
    this.numbers = numbers
  }

  generate() {
    let horses = []
    for(let i=1; i<=20; i++){
      horses.push({
        color : this.getRandomColor(),
        number: this.getUniqueNumber(),
        condition: this.getCondition(),
        status: GAMESTATUS.NOTSTARTED,
        name: this.getUniqueName(),
        speed: this.getSpeed()
      })
    }
    return horses
  }

  getRandomColor(){
    let color = generateRandomColor()
    return color
  }

  getUniqueNumber(){
    let number= getRandomNumbersFromArray(this.numbers)
    this.numbers.splice(this.numbers.indexOf(number),1)
    return number
  }

  getCondition(){
    return getRandomNumber(100, 3)
  }

  getSpeed(){
    return getRandomNumber(50, 5)
  }

  getUniqueName(){
    let randomNameLength = getRandomNumber(10, 3)
    return randomNameGenerator(randomNameLength)
  }

}
