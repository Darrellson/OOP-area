
class Square {
  constructor(sideLength1) {
    
    let _sideLength1 = sideLength1;

    
    this.getSideLength1 = function () {
      return _sideLength1;
    };
  }

  static calculatePerimeter(SideLength, Result) {
    const sideLength1 = parseFloat(document.getElementById(SideLength).value);

    if (isNaN(sideLength1)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid side length.';
    } else {
      const square = new Square(sideLength1);
      const perimeter = square.getPerimeter();

      document.getElementById(Result).innerHTML = `The perimeter of the square is ${perimeter}`;
    }
  }

  static calculateArea1(SideLength, Result) {
    const sideLength1 = parseFloat(document.getElementById(SideLength).value);

    if (isNaN(sideLength1)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid side length.';
    } else {
      const square = new Square(sideLength1);
      const area = square.getArea();

      document.getElementById(Result).innerHTML = `The area of the square is ${area}`;
    }
  }

  getPerimeter() {
    
    return 4 * this.getSideLength1();
  }

  getArea() {
    
    return Math.pow(this.getSideLength1(), 2);
  }
}

function calculateSquare(SideLength, Result, calculateFunction) {
  calculateFunction(SideLength, Result);
}