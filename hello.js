// Modules
// Modules are isolated
//to tell the location use ./
// import {num1} from "./sum"
// console.log(num1)
// in tsconfig.json
//change line 14,line 28 and line 30 uncomment
import { sumFn } from "./sum.js";
console.log(sumFn(4, 8));
