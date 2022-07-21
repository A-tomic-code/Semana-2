import { Matrix } from "./Matrix";

let m = new Matrix(5,5,10);
let m2 = new Matrix(5, 5, 10);

console.log(m.add(m2));
console.log(m.multNumber(5));
console.log(m.multSpecial(10));
m.print()