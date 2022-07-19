const Vector = require('./Vector');


class Matrix {
    /**
* crea una matriz de dimensiones nxm cuyo contenido son numeros
* aleatorios desde 0 hasta k
* @param {Number} n Ancho de la matriz
* @param {Number} n Alto de la matriz
* @param {Number} k Max. para los numeros que contiene
* @returns {Number[]}
*/

    constructor(n, m, k) {
        let matriz = []

        for (let i = 0; i < n; i++) {
            matriz.push(new Vector(m, k));
        }
    }




    /**
     * Suma la matriz m con la matriz de la clase
     * @param {Number[][]} m matriz
     * @returns {Number[]} Una nueva matriz que es la suma m con la matriz de la clase
    */

    add(m) {
        let matriz_temporal = [];

        if (m.length == this.matriz.length && m[0].length == this.matriz[0].length) {
            for (let i = 0; i < this.matriz.length; i++) {

                let vector = [];

                for (let j = 0; j < this.matriz[i].length; j++) {
                    vector.push(m[i][j] + this.matriz[i][j]);
                }

                matriz.push(vector);
            }
        }

        return matriz_temporal;
    }

    /**
     * Resta la la matriz m con la matriz de la clase
     * @param {Number[][]} m Matriz
     * @returns {Number[]} Una nueva matriz que es la resta m con la matriz de la clase
    */

    subs(m) {
        let matriz_temporal = [];

        if (m.length == this.matriz.length && m[0].length == this.matriz[0].length) {
            for (let i = 0; i < this.matriz.length; i++) {

                let vector = [];

                for (let j = 0; j < this.matriz[i].length; j++) {
                    vector.push(m[i][j] - this.matriz[i][j]);
                }

                matriz_temporal.push(vector);
            }
        }

        return matriz_temporal;
    }

    /**
     * Multiplica la matriz de la clase por un numero
     * @param {Number} n Numero
     * @param {Number} m Matriz
     * @returns {Number[]} Una nueva matriz que es el pruducto de m * n
    */

    productNum(n) {
        let matriz_temporal = [];

        for (let i = 0; i < m.length; i++) {
            let vector = [];

            for (let j = 0; j < this.matriz[i].length; j++) {
                vector.push(this.matriz[i][j] * n);
            }

            matriz_temporal.push(vector);
        }

        return matriz_temporal;
    }

    /**
     * Multiplica la matriz de la clase por el numero a
     * @param {Number} m1 Matriz 1
    */

    product(a) {
        let matriz_temporal = [];

        if (a.length == this.matriz.length && a[0].length == this.matriz[0].length) {
            for (let i = 0; i < this.matriz.length; i++) {

                let vector = [];

                for (let j = 0; j < this.matriz[i].length; j++) {
                    vector.push(a[i][j] * this.matriz[i][j]);
                }

                matriz_temporal.push(vector);
            }
        }

        return matriz_temporal;
    }

}
module.exports = Matrix;