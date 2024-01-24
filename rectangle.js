
class Rectangle {
  constructor(length, width) {
    
    let _length = length;
    let _width = width;

    
    this.getLength = function () {
      return _length;
    };

    this.getWidth = function () {
      return _width;
    };
  }

  static calculatePerimeter1(Length, Width, Result) {
    const length = parseFloat(document.getElementById(Length).value);
    const width = parseFloat(document.getElementById(Width).value);

    if (isNaN(length) || isNaN(width)) {
      document.getElementById(Result).innerHTML = 'Please enter valid length and width.';
    } else {
      const rectangle = new Rectangle(length, width);
      const perimeter = rectangle.getPerimeter();

      document.getElementById(Result).innerHTML = `The perimeter of the rectangle is ${perimeter}`;
    }
  }

  static calculateArea2(Length, Width, Result1) {
    const length = parseFloat(document.getElementById(Length).value);
    const width = parseFloat(document.getElementById(Width).value);

    if (isNaN(length) || isNaN(width)) {
      document.getElementById(Result1).innerHTML = 'Please enter valid length and width.';
    } else {
      const rectangle = new Rectangle(length, width);
      const area = rectangle.getArea();

      document.getElementById(Result1).innerHTML = `The area of the rectangle is ${area}`;
    }
  }

  getPerimeter() {
    
    return 2 * (this.getLength() + this.getWidth());
  }

  getArea() {
    
    return this.getLength() * this.getWidth();
  }
}

function calculateRectangle(Length, Width, Result, calculateFunction) {
  calculateFunction(Length, Width, Result);
}