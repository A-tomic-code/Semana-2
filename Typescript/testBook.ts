import { Book } from "./Book";

let elQuijote = new Book(
  "Don Quijote de la Mancha",
  1345,
  "8468025380",
  "Miguel de Cervantes",
  "Santillana"
);


console.log(elQuijote);

elQuijote.setTitle('titulo cambiad');
elQuijote.setAuthor('autor cambiado');
elQuijote.setEditorial('editorial cambiada');
elQuijote.setNPages(2);
elQuijote.setIsbn('isbn cambiado')

console.log(elQuijote.getTitle());
console.log(elQuijote.getAuthor());
console.log(elQuijote.getEditoial());
console.log(elQuijote.getNPages());
console.log(elQuijote.getIsbn());

console.log('\n' + elQuijote.toString());