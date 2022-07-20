"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.setTitle = function (titulo) {
        this.title = titulo;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setNPages = function (paginas) {
        this.nPages = paginas;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.setIsbn = function (ISBN) {
        this.isbn = ISBN;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setAuthor = function (auth) {
        this.author = auth;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setEditorial = function (editor) {
        this.editorial = editor;
    };
    Book.prototype.getEditoial = function () {
        return this.editorial;
    };
    Book.prototype.toString = function () {
        var salida = "T\u00EDtulo - ".concat(this.title, "\n    N\u00FAmero de paginas - ").concat(this.nPages, "\n    Author - ").concat(this.author, "\n    Editorial - ").concat(this.editorial);
        return salida;
    };
    return Book;
}());
exports.Book = Book;
