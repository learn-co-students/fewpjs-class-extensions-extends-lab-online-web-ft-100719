class Polygon {
  constructor(sides) {
    this._sides = sides;
  }

  get countSides() {
    return this._sides.length;
  }
  get perimeter() {
    return this._sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const a = this._sides[0];
    const b = this._sides[1];
    const c = this._sides[2];

    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this._sides.every(side => side === this._sides[0])) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this._sides[0] ** 2;
  }
}
