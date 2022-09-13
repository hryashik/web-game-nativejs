import { Hero } from "./modules/Classes/Hero.js"
//Переменные
const heroDiv = document.getElementById('hero')
const heroImg = document.getElementById('imgHero')
const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')
let startKey = null

let hero = new Hero('hryashik', 60, 0, heroDiv, heroImg)
console.log(hero)

// Callbacks
leftButton.onclick = hero.moveToLeft
rightButton.onclick = hero.moveToRight

let moveTimer = null
let keyHold = false

function arrowKeyDown(event) {
  if (event.key === 'ArrowLeft' && !keyHold) {
    keyHold = true
    moveTimer = setInterval(() => hero.moveToLeft(), 100)
  } else if (event.key === 'ArrowRight' && !keyHold) {
    keyHold = true
    moveTimer = setInterval(() => hero.moveToRight(), 100)
  }
}
function arrowKeyUp(event) {
  if (event.key === 'ArrowLeft') {
    keyHold = false
    clearInterval(moveTimer)
  } else if (event.key === 'ArrowRight') {
    keyHold = false
    clearInterval(moveTimer)
  }
}
window.onkeydown = e => {
  arrowKeyDown(e)
}
window.onkeyup = arrowKeyUp
