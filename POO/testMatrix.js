const Matrix = require('./Matrix.js');

let miMatriz = new Matrix(5, 5, 20);
let miMatriz2 = new Matrix(5, 5, 20)

console.log('---------------------------');
console.log('-----------ADD-------------');
console.log('---------------------------');

console.log(miMatriz.add(miMatriz2));

console.log('---------------------------');
console.log('-----------SUBS------------');
console.log('---------------------------');

console.log(miMatriz.subs(miMatriz2));

console.log('---------------------------');
console.log('---------PRODUCT-----------');
console.log('---------------------------');

console.log(miMatriz.product(miMatriz2));

console.log('---------------------------');
console.log('----------PRODUCT----------');
console.log('---------------------------');

console.log(miMatriz.product(miMatriz2));

console.log('---------------------------');
console.log('--------PRODUCT-NUM--------');
console.log('---------------------------');

console.log(miMatriz.productNum(5));