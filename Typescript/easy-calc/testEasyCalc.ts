import { EasyCalc } from "./EasyCalc";

let calculadora = new EasyCalc();

console.log(EasyCalc.getHistorial());

let suma = EasyCalc.sum([20, 2]);
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());

let resta = EasyCalc.subs([50, 20]);
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());

let mult = EasyCalc.mult([5, 10]);
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());

let div = EasyCalc.div([50, 2]);
console.log(EasyCalc.getHistorial());
console.log(EasyCalc.getFormatos());

