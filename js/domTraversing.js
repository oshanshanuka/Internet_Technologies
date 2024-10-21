console.log("Dom Traversing file is loaded");

const cardDetail = document.querySelector('.card-details');
//console.log(cardDetail.parentNode);
//console.log(cardDetail.parentNode.parentNode,parentNode,parentNode,parentNode);

console.log(cardDetail.childNodes);

const card = document.querySelector('.card-details');
console.log(card.children);
console.log(card.children(0));
console.log(card.firstChild);
console.log(card.lastChild);





