"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
