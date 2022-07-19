const Vector = require('./Vector');

class Matrix {

    /**
* crea una matriz de dimensiones nxm cuyo contenido son numeros
* aleatorios desde 0 hasta k
* @param {Number} n Ancho de la matriz
* @param {Number} m Alto de la matriz
* @param {Number} k Max. para los numeros que contiene
* @returns {Number[]}
*/

    constructor(n, m, k) {
        this.matriz = [];
        this.ancho = n;
        this.alto = m;

        for (let i = 0; i < n; i++) {
            this.matriz.push(new Vector(m, k).toArray());
        }
    }

    /**
     * Suma la matriz m con la matriz de la clase
     * @param {Number[][]} m matriz
     * @returns {Number[][]} Una nueva matriz que es la suma m con la matriz de la clase
    */

    add(m) {
        let matriz_temporal = [];

        if (m.ancho == this.ancho && m.alto == this.alto) {

            for (let i = 0; i < this.ancho; i++) {

                let array_temporal = [];

                for (let j = 0; j < this.alto; j++) {
                    array_temporal.push(m.matriz[i][j] + this.matriz[i][j])
                }

                matriz_temporal.push(array_temporal)
            }

        }

        return matriz_temporal
    }

    /**
     * Resta la la matriz m con la matriz de la clase
     * @param {Number[][]} m Matriz
     * @returns {Number[][]} Una nueva matriz que es la resta m con la matriz de la clase
    */

    subs(m) {
        let matriz_temporal = [];

        if (m.ancho == this.ancho && m.alto == this.alto) {
            for (let i = 0; i < this.ancho; i++) {

                let array_temporal = [];

                for (let j = 0; j < this.alto; j++) {
                    array_temporal.push(m.matriz[i][j] - this.matriz[i][j]);
                }

                matriz_temporal.push(array_temporal);
            }
        }

        return matriz_temporal;
    }

    /**
     * Multiplica la matriz de la clase por un numero
     * @param {Number} n Numero
     * @returns {Number[][]} Una nueva matriz
    */

    productNum(n) {
        let matriz_temporal = [];

        for (let i = 0; i < this.ancho; i++) {

            let array_temporal = [];

            for (let j = 0; j < this.alto; j++) {
                array_temporal.push(this.matriz[i][j] * n);
            }

            matriz_temporal.push(array_temporal);

        }

        return matriz_temporal;
    }


    /**
     * Multiplica la matriz de la clase por la matriz dada 
     * @param {Number} a Matriz a multiplicar
     * @returns {Number[][]} Una nueva matriz
    */

    product(a) {
        let matriz_temporal = [];

        if (this.alto == a.alto && this.ancho == a.ancho) {

            for (let i = 0; i < this.ancho; i++) {
                let array_temporal = [];

                for (let j = 0; j < this.alto; j++) {
                    array_temporal.push(this.matriz[i][j] * a.matriz[i][j]);
                }

                matriz_temporal.push(array_temporal);
            }
        }

        return matriz_temporal
    }

}

module.exports = Matrix;