class Contacts {
    constructor(){
        this.data = [];
    }

    printPersonas(){
        this.data.forEach(persona => persona.printAll());
    }
}

module.exports = Contacts;