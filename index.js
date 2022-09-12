//Переменные
const heroDiv = document.getElementById('hero')
const heroImg = document.getElementById('imgHero')
const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')
let hero = {
  move: null,
  direction: 'left',
  frame: 0
}

//Функции

function moveLeft() {
  heroDiv.className ? heroDiv.className = '' : ''
  hero.frame++
  if (hero.frame <= 5) {
    heroImg.style.left = `-${hero.frame * 288}px`
  } else {
    hero.frame = 0
    heroImg.style.left = `-${hero.frame * 288}px`
  }

}
function moveRight() {
  heroDiv.className ? '' : heroDiv.className = 'directionRight'
  hero.frame++
  if (hero.frame <= 5) {
    heroImg.style.left = `-${hero.frame * 288}px`
  } else {
    hero.frame = 0
    heroImg.style.left = `-${hero.frame * 288}px`
  }
}

// Callbacks
leftButton.onclick = moveLeft
rightButton.onclick = moveRight