console.log("Function file is loaded");

console.log("===================================================================================")

//1. Function declaration
function greet(firstName){
    if(typeof firstName === 'undefined'){
        console.log("Hello World");
    }else{
        console.log(`Hello,${firstName}`);//string interpolation(firstName);
    }
}
greet('Oshan');

console.log("===================================================================================")

//2. Function expression
let greet2 = function(firstName){
    console.log(`Hello,${firstName}`);
}
greet2('John');

console.log("===================================================================================")

//3. Arrow function

let greet3 = (firstName) => {
    console.log(`Hello,${firstName}`);
}
greet3('ssss');

let greet4 = (firstName) => console.log(`Hello,${firstName}`);
greet4('ssss');

console.log("===================================================================================")

//4.Default parameters

let greet5 = (firstName = 'World') => {
    console.log(`Hello,${firstName}`);
}
greet5('Jupiter');

console.log("===================================================================================")

//5.Rest parameters

let sum = (...numbers) => {
    numbers.forEach(number => console.log(number));
}
sum(1,2,3,4,5,6,7,8,9,10);