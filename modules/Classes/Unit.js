export class Unit {
  constructor(name, moveSpeed, positionX, heroDiv, heroImg) {
    this.name = name;
    this.moveSpeed = moveSpeed;
    this.positionX = positionX;
    this.heroDiv = heroDiv
    this.heroImg = heroImg
  }
  direction = "right";
  hp = 100;
  frame = 0;
  move = false;
  __maxPositionX = [-60, 1620];

  moveToLeft = () => {
    this.heroDiv.className ? this.heroDiv.className = '' : ''
    if (this.positionX > -60) {
      this.frame++
      this.positionX -= this.moveSpeed
      if (this.frame <= 5) {
        this.heroImg.style.left = `-${this.frame * 288}px`
        this.heroDiv.style.left = `${this.positionX}px`
      } else {
        this.frame = 0
        this.heroImg.style.left = `-${this.frame * 288}px`
        this.heroDiv.style.left = `${this.positionX}px`
      }
    } else {
      this.frame++
      if (this.frame <= 5) {
        this.heroImg.style.left = `-${this.frame * 288}px`
      } else {
        this.frame = 0
        this.heroImg.style.left = `-${this.frame * 288}px`
      }
    }
  }
  moveToRight = () => {
    this.heroDiv.className ? '' : this.heroDiv.className = 'directionRight'
    if (this.positionX < 1620) {
      this.frame++
      this.positionX += this.moveSpeed
      if (this.frame <= 5) {
        this.heroImg.style.left = `-${this.frame * 288}px`
        this.heroDiv.style.left = `${this.positionX}px`
      } else {
        this.frame = 0
        this.heroImg.style.left = `-${this.frame * 288}px`
        this.heroDiv.style.left = `${this.positionX}px`
      }
    } else {
      this.frame++
      if (this.frame <= 5) {
        this.heroImg.style.left = `-${this.frame * 288}px`
      } else {
        this.frame = 0
        this.heroImg.style.left = `-${this.frame * 288}px`
      }
    }
  }
  check() {
    this.heroDiv.style.left = '300px'
  }
}
