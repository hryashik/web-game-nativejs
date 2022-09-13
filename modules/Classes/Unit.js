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
    this.heroImg.style.top === '-576px' ? '' : this.heroImg.style.top = '-576px'
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
    this.move = true
    this.heroImg.style.top === '-576px' ? '' : this.heroImg.style.top = '-576px'
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
  moveOnSpot = () => {
    this.heroImg.style.top === 0 ? '' : this.heroImg.style.top = 0
    this.frame++
    this.move = false
    if (this.frame < 5) {
      this.heroImg.style.left = `-${this.frame * 288}px`
    } else {
      this.frame = 0
      this.heroImg.style.left = `-${this.frame * 288}px`
    }

  }
  jump = () => {
    this.heroImg.style.top === '-288px' ? '' : this.heroImg.style.top = '-288px'
    this.move = true
    if (this.frame < 5) {
      if (this.frame < 3) {
        this.heroImg.style.left = `-${this.frame * 288}px`
        this.heroDiv.style.top = `-${this.frame * 100}px`
        this.frame++
      } else if (this.frame >= 3) {
        this.heroImg.style.left = `-${this.frame * 288}px`
        this.heroDiv.style.top = `${this.frame * 20}px`
        this.frame++
      }
    } else {
      this.heroImg.style.left = 0
      this.heroImg.style.top = 0
      this.heroDiv.style.top = 0
    }
  }
}
