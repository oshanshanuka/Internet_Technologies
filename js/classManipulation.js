console.log("Class manipulation file is loaded");

const heading = document.getElementById('heading');
console.log(heading.classList);

heading.classList.add('new-class');
console.log(heading.classList);

heading.classList.remove('header');
console.log(heading.classList);

heading.classList.toggle('active');
console.log(heading.classList);

heading.classList.toggle('active');
console.log(heading.classList);



