"use strict";
exports.__esModule = true;
var Matrix_1 = require("./Matrix");
var m = new Matrix_1.Matrix(5, 5, 10);
var m2 = new Matrix_1.Matrix(5, 5, 10);
console.log(m.add(m2));
console.log(m.multNumber(5));
console.log(m.multSpecial(10));
m.print();
