"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var Vector_1 = require("./Vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            var vector = new Vector_1.Vector(m, k);
            this.elements.push(vector);
        }
        this.length = this.elements.length;
    }
    Matrix.prototype.print = function () {
        console.log(this);
    };
    Matrix.prototype.add = function (m1) {
        var matriz_temporal = new Matrix(0, 0, 0);
        var elements_temporal = [];
        var elements_m1 = m1.getElements();
        for (var i = 0; i < this.length; i++) {
            var vector_correspondiente = elements_m1[i];
            elements_temporal.push(this.elements[i].add(vector_correspondiente));
        }
        matriz_temporal.setElements(elements_temporal);
        return matriz_temporal;
    };
    Matrix.prototype.multNumber = function (n) {
        var matriz_temporal = new Matrix(0, 0, 0);
        var elements_temporal = [];
        for (var i = 0; i < this.length; i++) {
            var vector_temporal = this.elements[i].multNumber(n);
            elements_temporal.push(vector_temporal);
        }
        matriz_temporal.setElements(elements_temporal);
        return matriz_temporal;
    };
    Matrix.prototype.multSpecial = function (n) {
        var matriz_temporal = new Matrix(0, 0, 0);
        var vector_temporal = new Vector_1.Vector(0, 0);
        var elements_temporal_matriz = []; //para la matriz
        var elements_temporal_vector = []; //para el vector
        for (var i = 0; i < this.length; i++) {
            elements_temporal_vector = [];
            for (var j = 0; j < this.elements[i].length; j++) {
                var element = this.elements[i].getElements()[j];
                if (element % 2 === 0) {
                    element *= n;
                }
                else {
                    element *= n - 1;
                }
                elements_temporal_vector.push(element);
            }
            vector_temporal.setElements(elements_temporal_vector);
            elements_temporal_matriz.push(vector_temporal);
        }
        matriz_temporal.setElements(elements_temporal_matriz);
        return matriz_temporal;
    };
    Matrix.prototype.getElements = function () {
        return this.elements;
    };
    Matrix.prototype.setElements = function (value) {
        this.elements = value;
        this.length = this.elements.length;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
