// Your code here
class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length 
  }

  get perimeter(){
    return this.sides.reduce( (a, b) => a + b, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if( this.countSides === 3 && (this.sides[0] + this.sides[1]) > this.sides[2] && this.countSides === 3 && (this.sides[1] + this.sides[2]) > this.sides[0] && this.countSides === 3 && (this.sides[2] + this.sides[0]) > this.sides[1] ) {
      return true }
    else {
      return false }
  }
} 

class Square extends Polygon {
  get isValid(){
    if( this.countSides === 4 && this.sides.every( side => side === this.sides[0])){
      return true 
    } else {
      return false
    }
  }

  get area(){
    return this.sides[0] * this.sides[0]
  }
}