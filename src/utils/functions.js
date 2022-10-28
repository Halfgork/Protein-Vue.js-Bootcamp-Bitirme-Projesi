import {COLORS} from '@/constants/horseSpecs'

export function generateRandomColor (){
  let colors = COLORS
  return Object.keys(colors)[Math.floor(Math.random()*Object.keys(colors).length)]
}

export function getRandomNumber(randomMaxNumber, minLength=1) {
  return Math.floor(Math.random() * randomMaxNumber) + minLength
}

export function getRandomNumbersFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomNameGenerator (length) {
  let name = '';
  for(let i = 0; i < length; i++){
    const random = Math.floor(Math.random() * 27);
    name += String.fromCharCode(97 + random);
  }
  return name;
}
