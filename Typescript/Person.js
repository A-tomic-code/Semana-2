"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) { return currentYear - this.age; };
    Person.prototype.setAddress = function (address) { this.address = address; };
    Person.prototype.getAddress = function () { return this.address; };
    return Person;
}());
exports.Person = Person;
