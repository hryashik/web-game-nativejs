import { Unit } from "./Unit.js"
export class Hero extends Unit {
  constructor(name, moveSpeed, positionX, heroDiv, heroImg) {
    super(name, moveSpeed, positionX, heroDiv, heroImg)
  }
  ultimate = 0
  sayHello() {
    console.log('hello')
  }
}