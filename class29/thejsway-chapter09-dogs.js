class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    describe() {
        console.log(`${this.name} is a ${this.species} dog measuring ${this.size}`);
    }
    bark() {
       return this.size > 60 ? "Grrr! Grrr!" : "Woof! Woof!";
    }
    cat() {
        console.log(`Look, a cat! ${this.name} barks: ${this.bark()}`)
    }
}

const snowy = new Dog("Snowy", "terrier", 70);

snowy.cat()