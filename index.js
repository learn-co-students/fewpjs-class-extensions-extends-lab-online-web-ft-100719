// Your code here
class Polygon {
    constructor(array){
    this.sides = array
    }

    get countSides(){
      return this.sides.length
    }

    get perimeter(){
      let memo = 0
      for (let i=0; i < this.sides.length; i++){
        memo = this.sides[i] + memo
      }
      return memo
    }
}

class Triangle extends Polygon {

  get isValid(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]

    if (side1 + side2 < side3 || side2 + side3 < side1 || side3 + side1 < side2){
      return false
    }else {
      return true
    }

  }
}


class Square extends Polygon {
  get isValid(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]

    if (side1 === side2  && side3 === side4 && side2 === side4){
      return true
    } else {
      return false
    }
  }

  get area(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    return side1 * side2
  }
}
