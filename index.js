// Your code here

class Polygon {
    constructor(array) {
        this.array = array
        //this.count = this.array.length
    }
    get countSides(){
        return this.array.length
    }
    
    get perimeter() {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.array.reduce(reducer)
    }
}

class Triangle extends Polygon {
   get isValid() {
       if(this.countSides === 3 && this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0]) {
           return true
       } else {
           return false
       }
   }
}


class Square extends Polygon {
    get isValid() {
        if(this.countSides === 4 && this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]) {
            return true
        } else {
            return false
        }
    }

    get area(){
        return (this.array[0] ** 2)
    }
}

triangle = new Triangle( [ 5, 5, 5 ] )
triangle2 = new Triangle( [ 15, 10, 1 ] )

let square = new Square( [ 5, 5, 5, 5 ] )
let square2 = new Square( [ 5, 4, 3, 2 ] )

