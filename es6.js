class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    toString() {
        console.log('name:' + this.name + "color:" + this.color);
    }
}
let a = new Animal("dog", "white");
a.toString();