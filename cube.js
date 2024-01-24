
class Cube {
  constructor(sideLength) {
    
    let _sideLength = sideLength;

    this.getSideLength = function () {
      return _sideLength;
    };
  }

  static calculateVolume(SideLength, Result) {
    const sideLength = parseFloat(document.getElementById(SideLength).value);

    if (isNaN(sideLength)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid side length.';
    } else {
      const cube = new Cube(sideLength);
      const volume = cube.getVolume();

      document.getElementById(Result).innerHTML = `The volume of the cube is ${volume}`;
    }
  }

  static calculateSurfaceArea(SideLength, Result) {
    const sideLength = parseFloat(document.getElementById(SideLength).value);

    if (isNaN(sideLength)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid side length.';
    } else {
      const cube = new Cube(sideLength);
      const surfaceArea = cube.getSurfaceArea();

      document.getElementById(Result).innerHTML = `The surface area of the cube is ${surfaceArea}`;
    }
  }

  getVolume() {
    
    return Math.pow(this.getSideLength(), 3);
  }

  getSurfaceArea() {
    
    return 6 * Math.pow(this.getSideLength(), 2);
  }
}