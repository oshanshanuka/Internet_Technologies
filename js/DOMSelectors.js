console.log("DOM Selectors file is loaded");
console.log(document);/*html eka represent krnna use krai*/ 

//1.Selects an element by ID
const heading = document.getElementById("heading");
console.log(heading);

//2.Select an element by class name
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

//3.Select an element by tag name
const tags = document.getElementsByTagName("h1");
console.log(tags);

//4.select  an element by query selector
const querySelectors = document.querySelector("#heading");
console.log(querySelectors);

const querySelectors1 = document.querySelector(".paragraph");
console.log(querySelectors1);/*meke paragraph 3ma apit pennan na..plweni ek witrai pennanne*/ 

const querySelectors2 = document.querySelector(".container .box p");
console.log(querySelectors2);
 
//5.select  an element by query selectorAll
const query = document.querySelectorAll(".paragraph");
console.log(query);/*meke paragraph okkom pennano*/ 