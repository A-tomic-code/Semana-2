class Person {
    constructor(nombre, apellidos, altura, peso) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.altura = altura;
        this.peso = peso;
        this.yearOfBirth;

        this.IMC;
        this.tieneCoche = false;
        this.tieneMascota = false;

        this.hobbies = [];
    }

    calcIMC() {
        this.IMC = this.peso / (this.altura ** 2);
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