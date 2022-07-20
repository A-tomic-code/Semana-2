import { Contacts } from "./Contacts";
import { Person } from "./Person";

let contactos = new Contacts();

let yo: Person = new Person("Daniel", 28);
let mari: Person = new Person("Maria", 51);
let juan: Person = new Person("Juancho", 36);

contactos.people.push(yo, juan, mari);

contactos.printCalendar();