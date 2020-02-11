// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    set countSides(sides) {
        this.sides.length = sides.length
    }

    get perimeter() {
        return this.sides.reduce((acc, value) =>  acc + value)
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.count === 3) return
            let side1=this.sides[0]
            let side2=this.sides[1]
            let side3=this.sides[2]
        return !!((side1+side2>side3) && (side2+side3>side1) && (side1+side3>side2))
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.count === 4) return
            let side1=this.sides[0]
            let side2=this.sides[1]
            let side3=this.sides[2]
            let side4=this.sides[3]
        return !!((side1===side2) && (side2===side3) && (side3===side4))
    }

    get area() {
        if (this.count === 4 && this.isValid) return
            return this.sides[0] ** 2
    }
}