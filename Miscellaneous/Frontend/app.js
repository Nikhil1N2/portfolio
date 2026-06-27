// function personMaker(name, age) {    //for crate many object
//     const person = {                 //factory function
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi,my name is ${this.name}`);
//         }
//     };

//     return person;
// }


//contructors - doesnt return anything & start with capital
// function Person(name, age) {    //for crate many object
//     this.name = name;           //New operator
//     this.age = age;
//     console.log(this)

// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };

// class Person {                //classes
//     constructor(name,age) {    //for create many object
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Nikhil",21);
// let p2 = new Person("Nimish",18);


class Person {               //Inheritance
    constructor(name,age) {  //parent class
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,age,marks) {
        console.log("students class constructor");
        super(name,age);   //parent class constructor is being called
        this.marks = marks;
    }
    
};


class Teacher extends Person{
    constructor(name,age,subject) {
        super(name,age);   //parent class constructor is being called
        this.subject = subject;
    }
    
}
