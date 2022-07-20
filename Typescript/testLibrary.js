"use strict";
exports.__esModule = true;
var Library_1 = require("./Library");
var Book_1 = require("./Book");
var elQuijote = new Book_1.Book("Don Quijote de la Mancha", 1345, "8468025380", "Miguel de Cervantes", "Santillana");
var libroDeEjemplo = new Book_1.Book("milibro", 15, "852635380", "yo mismo", "Santillana");
var libroDeEjemplo2 = new Book_1.Book("milibro2", 150, "dfsd852635380", "yo mismo", "otraeditorial");
var libroDeEjemplo3 = new Book_1.Book("milibro3", 240, "kasod35380", "mi prima", "editorial2");
var libroDeEjemplo4 = new Book_1.Book("milibro4", 280, "8989jjd35380", "mi prima", "editorial5");
var todosLosLibros = [
    elQuijote,
    libroDeEjemplo,
    libroDeEjemplo2,
    libroDeEjemplo3,
    libroDeEjemplo4,
];
var miLibrary = new Library_1.Library(todosLosLibros, 'calle vacia', 'no manager');
miLibrary.setAddress('Calle de la bibloteca N1');
console.log(miLibrary.getAddres());
miLibrary.setManager('Manager1');
console.log(miLibrary.getManager());
console.log(miLibrary.getNumberOfBooks());
console.log(miLibrary.findByAuthor("mi prima"));
