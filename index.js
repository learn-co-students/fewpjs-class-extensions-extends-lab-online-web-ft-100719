class Polygon {
  constructor(arr) {
    this.sides = arr;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let perimeter = 0;

    for (let i = 0; i < this.countSides; i++) {
      perimeter = perimeter + this.sides[i];
    }

    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * 2;
  }
}
