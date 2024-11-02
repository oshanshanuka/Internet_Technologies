console.log("Prototype file is loaded");

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.age = 22;
Person.prototype.sayHi = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
}

let person1 = new Person("Oshan", "Shanuka");
console.log(person1);
console.log(person1.age);
console.log(person1.sayHi());