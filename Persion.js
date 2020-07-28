"use strict";
exports.__esModule = true;
var Person = /** @class */ (function() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tell = function() {
        console.log(this.name + this.age);
    };
    return Person;
}());
exports["default"] = Person;