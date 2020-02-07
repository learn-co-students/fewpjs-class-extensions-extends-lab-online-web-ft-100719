// Your code here
class Polygon {
  constructor(sideLengths) {
    this._sideLengths = sideLengths
  }
  get countSides() {
    return this._sideLengths.length
  }
  get perimeter() {
    return this._sideLengths.reduce((perimeter, side) => perimeter + side)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {
      return false
    } else {
      return this._sideLengths[0] + this._sideLengths[1] > this._sideLengths[2] &&
        this._sideLengths[1] + this._sideLengths[2] > this._sideLengths[0] &&
        this._sideLengths[0] + this._sideLengths[2] > this._sideLengths[1]
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) {
      return false
    } else {
      return this._sideLengths.slice(1).every(side => side === this._sideLengths[0])
    }
  }
  get area() {
    return this._sideLengths[0] ** 2
  }
}