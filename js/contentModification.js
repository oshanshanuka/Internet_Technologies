console.log("Content Modification file is loaded");
//1.
/*const heading = document.getElementById("heading");
console.log(heading.textContent);/*mhma dunnma return wenne api dunnu id ekt adala element eke text content ekai
heading.textContent = "New heading";*/

//2.
const card = document.querySelector(".card");
//console.log(card);
card.innerHTML = "<h2>My card</h2> <p>lorem lorem</p>"; //api hdpu card ekt thibba values wenuwt aluth values add krai.

//3.
console.log(card.innerHTML);
card.innerHTML = "Just inner context"

//4.
const input = document.querySelector("input");
console.log(input);
input.value = "Oshan";