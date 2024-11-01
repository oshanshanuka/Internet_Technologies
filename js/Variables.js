console.log("Variables file is loaded");

//var,let,const

//1)var-function scope
/*var firstName = "Oshan";
console.log(firstName);

function test(){
    //1.console.log("Test function");
    var x=10;
    console.log(x);
    console.log(firstName);//mhma dmmoth kynne globally scope eka kyl(function eken eliye thyena ewa).
}
//2.console.log(x);
test();
*/

/*//2)let - block scope
//let lastName = "Shanuka";

function testLet(){
    let y=10;
    console.log(y);
    if(true){
        let z=20;
        console.log(z);
    }
    console.log(z);//mhma dnna ba error enw.meke z kyna eka hdl thyenne if eka athule nisa eka valid wenne e if ekt adla scope eke witrai
}
testLet();
*/

//3)const - block scope
//const age = 22;

if(true){
    const m = 10;
    //m=20; const kynne constant value.e kynne nowens wena value wge
    console.log(m);
}