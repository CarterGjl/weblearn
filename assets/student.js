var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.tell = function () {
        console.log(this.age + this.name);
    };
    return Student;
}());
var stu = new Student('carter', 18);
stu.tell();
