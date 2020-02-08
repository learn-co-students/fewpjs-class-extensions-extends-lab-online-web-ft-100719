// Your code here
class Polygon {
    constructor(array){
        this.sides = array
    }
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((length, width) => length + width)
    }
}

class Triangle extends Polygon {
    //take 3 sides, add in pairs, sum should be greater than the third side
    get isValid() {
        if (this.sides[0] + this.sides[1] < this.sides[2] || this.sides[1] + this.sides[2] < this.sides[0] || this.sides[0] + this.sides[2] < this.sides[1]){
            return false
        }
        else {
            return true
        }

    }
}

class Square extends Polygon {
    get isValid(){
        if (this.countSides === 4 && this.sides.every(side => side === this.sides[0])){
            return true
        }
        else {
            return false
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}


