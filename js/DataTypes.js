console.log("Data types file is loaded");
console.log("===================================================================================")

//1.Primitive data types

//1.1 Number

let num1 = 10;
console.log(num1);
console.log(typeof num1);// ape data eka mona type ekd kyl check krgnn pluwn

let num2 = 10.5;
console.log(num2);
console.log(typeof num2);

console.log("===================================================================================")

//1.2 String

let customerName = "Oshan";
console.log(customerName);
console.log(typeof customerName);// ape data eka mona type ekd kyl check krgnn pluwn

console.log("===================================================================================")

//1.3 Boolean

let isCustomer = true;
let isEmployee = false;
console.log(typeof isCustomer);// ape data eka mona type ekd kyl check krgnn pluwn
console.log(typeof isEmployee);// ape data eka mona type ekd kyl check krgnn pluwn

console.log("===================================================================================")

//1.4 Undefined

let x;
console.log(x);//undefined kyl print wei..mkuth assign krl nthi nisa ehm enne
console.log(typeof x);//undefined kyl check krgnn pluwn

console.log("===================================================================================")

//1.5 Null

let y = null;   
console.log(y);//null kyl print wei.
console.log(typeof y);//null kyl check krgnn pluwn(object kyl enne me java scriptwla bug ekk)

console.log("===================================================================================")

//1.6 Symbol

let z = Symbol('symbol');
console.log(z);
console.log(typeof z);

console.log("===================================================================================")

//2.Reference data types(Non Premitive data types)

//2.1.Object-key value pairwla structure ekk

let person = {
    firstName : "Oshan",
    lastName : "Shanuka",
    age : 25
}
console.log(person);
console.log(typeof person);

console.log("===================================================================================")

//2.2.Array

let colors = ['red','green','blue'];
console.log(colors);
console.log(typeof colors);
console.log(Array.isArray(person));//array eka check krai

console.log("===================================================================================")

//2.3.Function

function greet(){
    console.log("Hello");
}
greet();
console.log(typeof greet);

//2.4 Date

let today = new Date();
console.log(today);
console.log(typeof today);