"use strict";
exports.__esModule = true;
var Contacts_1 = require("./Contacts");
var Person_1 = require("./Person");
var contactos = new Contacts_1.Contacts();
var yo = new Person_1.Person("Daniel", 28);
var mari = new Person_1.Person("Maria", 51);
var juan = new Person_1.Person("Juancho", 36);
contactos.people.push(yo, juan, mari);
contactos.printCalendar();
