import { Person } from "./Person";

let yo:Person = new Person('Daniel', 28);

yo.setAddress("Gerardo Diego 9");

yo.printName();
console.log(yo.yearOfBirth(new Date().getFullYear()));

