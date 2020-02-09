class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce(function (memo, side) {
      return memo + side
    }, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] < this.sides[2] || this.sides[1] + this.sides[2] < this.sides[0] || this.sides[0] + this.sides[2] < this.sides[1]) {
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
      return true
    }
    return false
  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}