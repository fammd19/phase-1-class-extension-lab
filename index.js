// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides () {
        return this.sides.length;
    }
    get perimeter () {
        return this.sides.reduce((acc, side) => acc+side,0);
    }
}

class Triangle extends Polygon {
    get isValid () {
    if (this.countSides ==! 3) return false;

    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
    }
}


class Square extends Polygon {
    get isValid () {
        if (this.sides[0] === this.sides[1] && 
            this.sides[1] === this.sides[2] &&
            this.sides[2] === this.sides[3])
            {
                return true;
            }
        else {
            return false;
        } 
    }
    get area () {
        return this.sides[0]**2;
    }
}