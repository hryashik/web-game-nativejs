import { Hero } from "./modules/Classes/Hero.js"
//Переменные
const heroDiv = document.getElementById('hero')
const heroImg = document.getElementById('imgHero')
const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')

let hero = new Hero('hryashik', 60, 0, heroDiv, heroImg)
console.log(hero)

// Callbacks
leftButton.onclick = hero.moveToLeft
rightButton.onclick = hero.moveToRight

let standingTimer = null
let jumpTimer = null
let moveTimer = null
let startJump = false

const zeroTimers = () => {
  clearInterval(standingTimer)
  clearInterval(jumpTimer)
  clearInterval(moveTimer)
  standingTimer = null, jumpTimer = null, moveTimer = null
}

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
    standingTimer = setInterval(() => hero.moveOnSpot(), 130)
  } else if (event.key === 'ArrowRight') {
    keyHold = false
    clearInterval(moveTimer)
    standingTimer = setInterval(() => hero.moveOnSpot(), 130)
  }
}
function jump(event) {
  if (!jumpTimer) {
    zeroTimers()
    hero.frame = 0
    jumpTimer = setInterval(() => hero.jump(), 150)
  }

}
const start = () => {
  standingTimer = setInterval(() => hero.moveOnSpot(), 130)
}
start()
window.onkeydown = e => {
  clearInterval(standingTimer)
  if (hero.move === false)
  arrowKeyDown(e)
  if (e.key === ' ') {
    jump(e)
  }
}
window.onkeyup = (e) => {
  arrowKeyUp(e)
  if (e.key === ' ') {
    setTimeout(() => {
      zeroTimers()
      hero.frame = 0
      start()
    }, 900)
  }
}