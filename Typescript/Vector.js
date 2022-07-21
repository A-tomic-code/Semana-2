"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Number((Math.random() * k).toFixed()));
        }
        this.length = this.elements.length;
    }
    Vector.prototype.print = function () {
        console.log(this);
    };
    Vector.prototype.add = function (v1) {
        var v = new Vector(0, 0);
        if (this.length == v1.length) {
            for (var i = 0; i < this.length; i++) {
                v.elements.push(this.elements[i] + v1.elements[i]);
            }
            v.length = v.elements.length;
        }
        return v;
    };
    Vector.prototype.subs = function (v1) {
        var v = new Vector(0, 0);
        if (this.length == v1.length) {
            for (var i = 0; i < this.length; i++) {
                v.elements.push(this.elements[i] - this.elements[i]);
            }
            v.length = v.elements.length;
        }
        return v;
    };
    Vector.prototype.mult = function (v1) {
        var v = new Vector(0, 0);
        if (this.length == v1.length) {
            for (var i = 0; i < this.length; i++) {
                v.elements.push(this.elements[i] * this.elements[i]);
            }
            v.length = v.elements.length;
        }
        return v;
    };
    Vector.prototype.multNumber = function (n) {
        var v = new Vector(0, 0);
        for (var i = 0; i < this.length; i++) {
            v.elements.push(this.elements[i] * n);
        }
        v.length = v.elements.length;
        return v;
    };
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    Vector.prototype.setElements = function (value) {
        this.elements = value;
        this.length = this.elements.length;
    };
    return Vector;
}());
exports.Vector = Vector;
