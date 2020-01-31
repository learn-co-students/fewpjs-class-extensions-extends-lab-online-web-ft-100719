class Polygon{
    constructor(array){
        this.allSides = array
    }

    get countSides(){
        return this.allSides.length
    }

    get perimeter(){
        return this.allSides.reduce((a,b) => a + b, 0)
    }
}

class Triangle extends Polygon{
    triangleValidity(){
        let sides = [...this.allSides]
        let smallestSide = Math.min(...sides)
        let largestSide = Math.max(...sides)
        sides.splice(sides.indexOf(smallestSide), 1)

        let middleSide = Math.min(...sides)
        
        if (smallestSide + middleSide > largestSide){
            return true
        } else{
            return false
        }

    }

    get isValid(){
        if (this.countSides === 3 && this.triangleValidity()){
            return true
        } else{
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        const sameNum = (side) =>{
            return this.allSides[0] === side
        }
        return this.allSides.every(sameNum)
    }

    get area(){
        return this.allSides[0] ** 2
    }
}