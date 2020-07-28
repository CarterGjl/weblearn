class Student{
    public name:string;
    public age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    tell(){
        console.log(this.age+this.name);
        
    }
}
let stu1   =  new Student('carter',18);
stu1.tell()