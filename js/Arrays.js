console.log("Arrays file is loaded");

console.log("===================================================================================")

//1.Array literal

let fruits = ["apple","mango","banana"];
console.log(fruits);

console.log("===================================================================================")

//2.Using Array constructor

let cars = new Array("BMW","Mercedes","Audi","Toyota");
console.log(cars);

console.log("===================================================================================")

let myArray = [100,'ddd',true,null,undefined]; //javascriptwla array ekaka wens wens elements ekma array eke thygnna pluwn
console.log(myArray);

console.log("===================================================================================")

console.log(fruits[0]);
console.log(fruits[1]);
console.log(cars[2]);

//3.change value
fruits[0] = "grapes";
console.log(fruits);

console.log("===================================================================================")

//4.built-in array function

//4.1.push - add a new element to the end of the array
fruits.push("orange");
console.log(fruits);

console.log("===================================================================================")

//4.2.pop - remove the last element from the array
console.log(fruits);
let poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);

console.log("===================================================================================")

//4.3.shift - remove the first element from the array
console.log(fruits);
let shiftedFruit = fruits.shift();
console.log(shiftedFruit);
console.log(fruits);

console.log("===================================================================================")

//4.4.unshift - add a new element to the beginning of the array
console.log(fruits);
fruits.unshift("pineapple");
console.log(fruits);

console.log("===================================================================================")

//4.5 splice - add or remove elements from the array
fruits.splice(2,1); //2 kynne kiweni index ekd kyl.. 1 kynne kyk glwnna ond kyl
console.log(fruits);

console.log("===================================================================================")

console.log(fruits);
fruits.splice(1,0,'banana','apple','kiwi'); //1 kynne kiweni index ekd kyl.. 0 kynne kyk glwnna ond kyl
console.log(fruits);    

console.log("===================================================================================")

//4.6 slice - create a new array from the existing array
console.log(fruits);
let slicedFruits = fruits.slice(1,3); //1 kynne kiweni index ekd kyl.. 3 kynne kiweni index ekd kyl
console.log(slicedFruits);

console.log("===================================================================================")

//4.7 concat - merge two or more arrays
let newArray = fruits.concat(cars);
console.log(newArray);

console.log("===================================================================================")

//4.8 forEach - loop through an array
newArray.forEach(function(fruits){
    console.log(fruits);
})

console.log("===================================================================================")

//4.9 map - loop through an array and create a new array
let uppercaseFruits = newArray.map(fruits => fruits.toUpperCase());
console.log(uppercaseFruits);

console.log("===================================================================================")

//4.10 filter - loop through an array and create a new array

let lengthFruits = fruits.filter(fruits => fruits.length > 5); //fruit eke nmta akuru 5t wadi name thygena adu ew remove wenw
console.log(lengthFruits);