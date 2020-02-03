// Your code here
class Polygon {
    constructor(arr){
        this.sides = arr;
        this.count = arr.length
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((n, x) => n + x, 0)
    }
}

class Triangle extends Polygon {
    get isValid(){
        const a = this.sides[0]
        const b = this.sides[1]
        const c = this.sides[2]

        if (a + b > c && a + c > b && b + c > a) {
            return true;
          } else {
            return false;
          }
    }
}

class Square extends Polygon {
    get isValid(){
            if (this.sides.every(side => side === this.sides[0])){
                return true
            }else{
                return false
        }
    }
    get area(){
            return this.sides[0] ** 2
        }
    }
