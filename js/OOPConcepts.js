console.log(" OOP Concepts file is loaded");

class Vehicle { 
    constructor(make, model, year) {
        this.make = make;   
        this.model = model;
        this.year = year;
    }
    displayInformation() { 
        return this.make + " " + this.model + " " + this.year;
    }
}
let Vehicle1 = new Vehicle("BMW", "X5", 2020);
console.log(Vehicle1.displayInformation());

class Car extends Vehicle {
    constructor(make, model, year,color) {
        super(make, model, year);
        this.color = color;
    }
    displayInformation() {
        return `${super.displayInformation()} ${this.color}`
    }
}
let Car1 = new Car("BMW", "X5", 2020,"Red");
console.log(Car1.displayInformation());