let Person = require('./person.js');

let yo = new Person('Daniel', 'Vázquez Heredia', 174, 70);

yo.hobbies.push('nadar', 'patinar');
yo.tieneCoche = true;
yo.tieneMascota = true;
yo.calcIMC();

console.log('----------');
console.log('hobbies');
console.log('----------');

yo.printHobbies()

console.log('----------');
console.log('todo');
console.log('----------');

yo.printAll();