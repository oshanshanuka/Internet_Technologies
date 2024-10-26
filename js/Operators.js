console.log("Operators file is loaded");
console.log("===================================================================================")

//1.Arithmatic operators

let x = 10;
let y = 20;
console.log(x+y);//30
console.log(x-y);//-10
console.log(x*y);//200
console.log(x/y);//0.5
console.log(x%y);//10  

console.log("===================================================================================")

//2.Assignment operators

let a = 10;
let b = 20;

a += b; //a=a+b
console.log(a);//30
a -= b; //a=a-b
console.log(a);//10
a *= b; //a=a*b
console.log(a);//200
a /= b; //a=a/b
console.log(a);//20
a %= b; //a=a%b
console.log(a);//10

console.log("===================================================================================")

//3.Comparison operators

let c = 10;
let d = 20;
let e = 10;
let f = '10';

console.log(c==d);//false
console.log(c==e);//true
console.log(c==f);//true
console.log(typeof f);//string
console.log(c!=d);//true
console.log(c>d);//false
console.log(c<d);//true
console.log(c>=d);//false
console.log(c<=d);//true
console.log(c===e);//true
console.log(c===f);//false
console.log(c!==e);//false
console.log(c!==f);//true

// == meken value eka witrk check krai
//=== meken value ekai variable eke type ekai dekma check krl answer eka dei
//!= meken not equal kyna eka represent krai
//!== meken value ekai type ekai dekm check krai

console.log("===================================================================================")

//4.Logical operators

let g = true;
let h = false;

console.log(g && h);//false (&& eken dekm check krai)
console.log(g || h);//true
console.log(!g);//false (! Thyen value eke opposite eka)
console.log(!h);//true