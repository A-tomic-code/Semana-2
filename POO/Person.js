class Person {
    constructor(nombre, apellidos, altura, peso) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth = undefined;

        this.IMC;
        this.tieneCoche = false;
        this.tieneMascota = false;

        this.hobbies = [];

    }

    calcIMC() {
        this.IMC = this.peso / (this.altura ** 2);
    }

    calcEdad() {
        if (this.yearOfBirth) {
            this.edad = new Date().getFullYear - this.yearOfBirth;
        } else {
            console.warn('No se ha podido calcular la edad porque el año de nacimiento es undefined')
        }
    }

    printAll() {
        console.log(
            'Nombre' + ' - ' + this.nombre + '\n' +
            'Apellidos' + ' - ' + this.apellidos + '\n' +
            'Altura' + ' - ' + this.altura + '\n' +
            'Peso' + ' - ' + this.peso + '\n' +
            'Año de nacimiento' + ' - ' + this.yearOfBirth + '\n' +
            'IMC' + ' - ' + this.IMC + '\n' +
            'Tiene coche' + ' - ' + this.tieneCoche + '\n' +
            'Tiene Mascota' + ' - ' + this.tieneMascota + '\n'
        );

    }

    printHobbies() {
        console.log(this.hobbies);
    }
}


module.exports = Person;