//Переменные
const heroDiv = document.getElementById('hero')
const heroImg = document.getElementById('imgHero')
const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')
let hero = {
  move: null,
  moveValue: 60,
  direction: 'left',
  frame: 0,
  positionX: 0,
  __maxPositions: [-60, 1620]
}

//Функции

function moveToLeft() {
  heroDiv.className ? heroDiv.className = '' : ''
  if (hero.positionX > -60) {
    hero.frame++
    hero.positionX -= hero.moveValue
    if (hero.frame <= 5) {
      heroImg.style.left = `-${hero.frame * 288}px`
      heroDiv.style.left = `${hero.positionX}px`
    } else {
      hero.frame = 0
      heroImg.style.left = `-${hero.frame * 288}px`
      heroDiv.style.left = `${hero.positionX}px`
    }
  }
}
function moveToRight() {
  heroDiv.className ? '' : heroDiv.className = 'directionRight'
  if (hero.positionX < 1620) {
    hero.frame++
    hero.positionX += hero.moveValue
    if (hero.frame <= 5) {
      heroImg.style.left = `-${hero.frame * 288}px`
      heroDiv.style.left = `${hero.positionX}px`
    } else {
      hero.frame = 0
      heroImg.style.left = `-${hero.frame * 288}px`
      heroDiv.style.left = `${hero.positionX}px`
    }
    if (hero.positionX > 1620) {
      heroImg.style.left = `-${hero.frame * 288}px`
    }
  }

}

// Callbacks
leftButton.onclick = moveToLeft
rightButton.onclick = moveToRight

let moveTimer = null
let listenEvents = true

function arrowKeyDown(event) {
  if (event.key === 'ArrowLeft' && listenEvents) {
    listenEvents = false
    moveTimer = setInterval(() => moveToLeft(), 100)
  } else if (event.key === 'ArrowRight' && listenEvents) {
    listenEvents = false
    moveTimer = setInterval(() => moveToRight(), 100)
  }
}
function arrowKeyUp(event) {
  if (event.key === 'ArrowLeft') {
    listenEvents = true
    clearInterval(moveTimer)
  } else if (event.key === 'ArrowRight') {
    listenEvents = true
    clearInterval(moveTimer)
  }
}

window.onkeydown = arrowKeyDown
window.onkeyup = arrowKeyUp
