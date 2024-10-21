console.log("Attributes modification file is loaded");


//1.
const link = document.querySelector('a');
console.log(link.getAttribute('href'));/* print wenne a tag ekt adala ekai */

//2.
link.setAttribute('href','https://www.facebook.com');

//3.
link.setAttribute('target',"_blank");

//4.
link.removeAttribute('target');