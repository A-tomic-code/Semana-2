class Vector {

    constructor(n, m) {
        this.arr = [];

        for (let i = 0; i < n; i++) {
            this.arr.push(Number((Math.random() * m).toFixed()))
        }
    }

    add(a) {
        let resultado = [];

        if (a.length === this.arr.length) {
            for (let i = 0; i < a.length; i++) {
                resultado.push(a[i] + this.arr[i]);
            }
        } else {
            console.warn('Error  en funcion add() El array no tiene la misma longitud que el vector de clase');
        }

        return resultado
    } 

    subs(a) {
        let resultado = [];

        if (a.length === this.arr.length) {
            for (let i = 0; i < a.length; i++) {
                resultado.push(a[i] - this.arr[i]);
            }
        } else {
            console.warn('Error  en funcion subs() El array no tiene la misma longitud que el vector de clase');
        }

        return resultado
    }

    product(a) {
        let resultado = [];

        if (a.length === this.arr.length) {
            for (let i = 0; i < a.length; i++) {
                resultado.push(a[i] * this.arr[i]);
            }
        } else {
            console.warn('Error  en funcion product() El array no tiene la misma longitud que el vector de clase');
        }

        return resultado
    }

    productNum(n) {
        return this.arr.map(numero => numero * n);
    }

}

module.exports = Vector;