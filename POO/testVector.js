const Vector = require("./Vector");

let miVector = new Vector(5, 10);
console.log('---FUNCION ADD---');
console.log(miVector.add([2, 4, 5, 8, 9]));
console.log(miVector.add([2, 4, 5, 8])); //este da error porque el tamaño es distino al array de la clase

console.log('--- FUNCION SUBS---');
console.log(miVector.subs([2, 4, 5, 8, 9]));
console.log(miVector.subs([2, 4, 5, 8])); //este da error porque el tamaño es distino al array de la clase

console.log('--- FUNCION PRODUCT---');
console.log(miVector.product([2, 4, 5, 8, 9]));
console.log(miVector.product([2, 4, 5, 8])); //este da error porque el tamaño es distino al array de la clase

console.log('--- FUNCION PRODUCTNUM---');
console.log(miVector.productNum(6));
