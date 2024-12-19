function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Use Car.prototype (not car.prototype) to add methods to the Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Call the parent constructor with the current context
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Set up inheritance from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed; // Return topSpeed
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

