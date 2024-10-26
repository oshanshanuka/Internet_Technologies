console.log("Type Conversion file is loaded");

console.log("===================================================================================")

//1.Implicitly Type conversion-Automatic convert wei

let result = 'The answer is'+100;
console.log(typeof result);   //string 

console.log("===================================================================================")

let sum = '37'+'5';
console.log(sum);//375
console.log(typeof sum);//string

console.log("===================================================================================")

let diff = '37'-5;
console.log(diff);//32
console.log(typeof diff);//number

console.log("===================================================================================")

let mult = '37'+5;
console.log(mult);//375
console.log(typeof mult);//string

console.log("===================================================================================")

let div = '37'/5;
console.log(div);//7.4
console.log(typeof div);//number

console.log("===================================================================================")

let mod = '37'%5;
console.log(mod);//2
console.log(typeof mod);//number

console.log("===================================================================================")

//2.Explicitly Type conversion-manual convert krnna ona

let num1 = '10';
console.log(num1);//10
console.log(typeof num1);//string

let num2 = Number(num1);
console.log(num2);
console.log(typeof num2);

console.log("===================================================================================")

let num3 = Number('40px');
console.log(num3);//output ek wdyt NaN kyl enne..e kynne Not a Number kyl..ehm enne px kyl deel thyena nisa
console.log(typeof num3);//data type ek wdyt enne number ekk kyl..NaN kynneth numeric ekk wdyt thmai gnne

console.log("===================================================================================")

let num4 = Number('Hello');
console.log(num4);//NaN
console.log(typeof num4);//number

console.log("===================================================================================")

let num5 = Number(true);
console.log(num5);//1
console.log(typeof num5);//number

let num6 = Number(false);
console.log(num6);//0
console.log(typeof num6);//number

let num7 = Number(null);
console.log(num7);//0
console.log(typeof num7);//number

let num8 = Number(undefined);
console.log(num8);//NaN
console.log(typeof num8);//number

console.log("===================================================================================")

let num9 = parseInt('10');
console.log(num9);//10
console.log(typeof num9);//number

let num10 = parseInt('10.55');
console.log(num10);//10
console.log(typeof num10);//number