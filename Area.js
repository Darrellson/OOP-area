
class Circle {
  constructor(radius) {
    let _radius = radius;

    this.getRadius = function () {
      return _radius;
    };
  }

  static calculateCircumference(radiusId, resultId) {
    const radius = parseFloat(document.getElementById(radiusId).value);

    if (isNaN(radius)) {
      document.getElementById(resultId).innerHTML = 'Please enter a valid radius.';
    } else {
      const circle = new Circle(radius);
      const circumference = circle.getCircumference().toFixed(2);

      document.getElementById(resultId).innerHTML = `The circumference is ${circumference}`;
    }
  }

  getCircumference() {
    return 2 * Math.PI * this.getRadius();
  }
}