// Modules
// Modules are isolated
//to tell the location use ./
// import {num1} from "./sum"
// console.log(num1)
// in tsconfig.json
//change line 14,line 28 and line 30 uncomment


import {sumFn} from "./sum.js"
console.log(sumFn(4,8));

//********************************************************************************/
//Number Method
let price:number=18;
console.log(price.toFixed(2))
/////////////////////////////////////////////////////////////////////////////////
//the process of type is called narrowing bec of intialization
let age:string | number;
age=23 //narrowing
age.toFixed(2)
age='18'
age.toUpperCase();

//Type 
let newAge=Math.random()>0.6? 18:"ali";
if(typeof newAge==="number"){
    newAge//number
}else{
    console.log(newAge.toUpperCase())//string
}
