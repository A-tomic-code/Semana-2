"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setAddress = function (addr) {
        this.address = addr;
    };
    Library.prototype.getAddres = function () {
        return this.address;
    };
    Library.prototype.setManager = function (manag) {
        this.manager = manag;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        var salida = '';
        for (var i = 0; i < this.books.length; i++) {
            salida += this.books[i].toString + '\n';
        }
        return salida;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    };
    return Library;
}());
exports.Library = Library;
