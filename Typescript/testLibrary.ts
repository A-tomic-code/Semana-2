import { Library } from "./Library";
import { Book } from "./Book";

let elQuijote = new Book(
  "Don Quijote de la Mancha",
  1345,
  "8468025380",
  "Miguel de Cervantes",
  "Santillana"
);

let libroDeEjemplo = new Book(
  "milibro",
  15,
  "852635380",
  "yo mismo",
  "Santillana"
);

let libroDeEjemplo2 = new Book(
  "milibro2",
  150,
  "dfsd852635380",
  "yo mismo",
  "otraeditorial"
);

let libroDeEjemplo3 = new Book(
  "milibro3",
  240,
  "kasod35380",
  "mi prima",
  "editorial2"
);

let libroDeEjemplo4 = new Book(
  "milibro4",
  280,
  "8989jjd35380",
  "mi prima",
  "editorial5"
);

let todosLosLibros = [
  elQuijote,
  libroDeEjemplo,
  libroDeEjemplo2,
  libroDeEjemplo3,
  libroDeEjemplo4,
];

let miLibrary = new Library(todosLosLibros,'calle vacia', 'no manager');

miLibrary.setAddress('Calle de la bibloteca N1');
console.log(miLibrary.getAddres());

miLibrary.setManager('Manager1')
console.log(miLibrary.getManager());


console.log(miLibrary.getNumberOfBooks());
console.log(miLibrary.findByAuthor("mi prima"));

