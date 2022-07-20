"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var yo = new Person_1.Person('Daniel', 28);
yo.setAddress("Gerardo Diego 9");
yo.printName();
console.log(yo.yearOfBirth(new Date().getFullYear()));
