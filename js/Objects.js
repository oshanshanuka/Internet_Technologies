console.log("Objects file is loaded");

console.log("===================================================================================")
//objects

let person = {
    firstName : "John",
    lastName : "Doe",
    hobbies : ["Swimming","singing','music"],
    age : 22,
    address:{
        streets:'No.19',
        city:'Colombo',
        country:'Sri Lanka'
    },
    getBirthYear : function(){
        return 2024-this.age;
    }
}
console.log("Person details:",person);

console.log("===================================================================================")

//Accessing the object properties
//1.Dot notation

console.log("First name:",person.firstName);
console.log("Last name:",person.lastName);
console.log("Age:",person.age);
console.log("Address:",person.address);
console.log("city:",person.address.city);
console.log("function:",person.getBirthYear());

console.log("===================================================================================")

//2.bracket notation

console.log("First name:",person['firstName']);
console.log("Last name:",person['lastName']);
console.log("Age:",person['age']);
console.log("Address:",person['address']);
console.log("city:",person['address']['city']);
console.log("function:",person['getBirthYear']());

//Add a new property
person.phoneNumber = '0712345678';
console.log(person.phoneNumber);

//change the firstName and lastName
person.firstName = "Oshan";
person.lastName = "Shanuka";
console.log(person);

//delete a property
delete person.phoneNumber;
console.log(person);

console.log("===================================================================================")

let car ={
    brand:"Toyota",
    model:"Corolla"
}
car.getDescription = function(){
    return this.brand+"-"+this.model;
}
console.log(car.getDescription()); //print wenne toyota corolla kyl

console.log("===================================================================================")

function displayName(student){
    console.log(student.firstName+" "+student.lastName);
}
let student = {
    firstName : "Oshan",
    lastName : "Shanuka"
}
displayName(student);

console.log("===================================================================================")

//looping through objects properties
for (let key in person){
    console.log(key,person[key]);
}

console.log("===================================================================================")

//object destructuring
let {firstName,lastName,age,address,hobbies} = person;
console.log(firstName,lastName,age);
console.log(address.city);
console.log(hobbies);

console.log("===================================================================================")

//1.1 object.keys()
console.log(Object.keys(person));

//1.2 object.values()
console.log(Object.values(person));

//1.3 object.entries()
console.log(Object.entries(person));

console.log("===================================================================================")

//constructor function 

function Person(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}
let person1 = new Person("Oshan","Shanuka",22);
console.log(person1);

console.log("===================================================================================")

//from ES6
class Person2{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;   
        this.age = age;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

let person2 = new Person2("Oshan","Shanuka",22);
console.log(person2);
console.log(typeof person2);