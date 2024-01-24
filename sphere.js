
class Sphere {
  constructor(radius2) {
    
    let _radius2 = radius2;

    
    this.getRadius2 = function () {
      return _radius2;
    };
  }

  static calculateVolume1(Radius, Result) {
    const radius2 = parseFloat(document.getElementById(Radius).value);

    if (isNaN(radius2)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid radius.';
    } else {
      const sphere = new Sphere(radius2);
      const volume = sphere.getVolume().toFixed(2);

      document.getElementById(Result).innerHTML = `The volume of the sphere is ${volume}`;
    }
  }

  static calculateSurfaceArea1(Radius, Result) {
    const radius2 = parseFloat(document.getElementById(Radius).value);

    if (isNaN(radius2)) {
      document.getElementById(Result).innerHTML = 'Please enter a valid radius.';
    } else {
      const sphere = new Sphere(radius2);
      const surfaceArea = sphere.getSurfaceArea().toFixed(2);

      document.getElementById(Result).innerHTML = `The surface area of the sphere is ${surfaceArea}`;
    }
  }

  getVolume() {
    
    return (4 / 3) * Math.PI * Math.pow(this.getRadius2(), 3);
  }

  getSurfaceArea() {
   
    return 4 * Math.PI * Math.pow(this.getRadius2(), 2);
  }
}

function calculateSphere(Radius, Result, calculateFunction) {
  calculateFunction(Radius, Result);
}
 