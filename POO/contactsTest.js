const Contacts = require('./Contacts');
const Person = require('./Person');

let juani = new Person('Juani', 'Perez Perez', 180, 80);
juani.tieneCoche = true;
juani.yearOfBirth = 1939;
juani.calcIMC();
juani.calcEdad();

let pepi = new Person('Pepi', 'Fernandez Hinojosa', 168, 75);
pepi.tieneMascota = true;
pepi.yearOfBirth = 1986;
pepi.calcIMC();
pepi.calcEdad();

let sergio = new Person('Sergio', 'Perez Gonzalez', 171, 94);
sergio.tieneCoche = true;
sergio.tieneMascota = true;
sergio.hobbies.push('pintar','deporte')
sergio.calcIMC();
sergio.calcEdad();

let sandra = new Person('Sandra', 'Velazquez Sanzhez', 162, 65);
sandra.tieneCoche = false;
sandra.tieneMascota = true;
sandra.yearOfBirth = 1984;
sandra.calcIMC();
sandra.calcEdad();

let contactos = new Contacts();
contactos.data.push(juani);
contactos.data.push(pepi);
contactos.data.push(sandra);
contactos.data.push(sergio);

contactos.printPersonas();