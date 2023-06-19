// Parent class representing a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }

    rest() {
        console.log(`${this.name} is taking a break.`);
    }
}

// Child class representing a student, inheriting from the Person class
class Student extends Person {
    constructor(name, age, grade) {
        // Call the parent class constructor using super()
        super(name, age);
        this.grade = grade;
    }

    attendClass() {
        console.log(`${this.name} is attending a class.`);
    }
}

// Create instances of the classes
const person = new Person("John", 25);
const student = new Student("Alice", 20, 11);

// Accessing methods from the parent class
person.study();
person.rest();

// Accessing methods from the child class

student.study();

student.rest();

student.attendClass();

// (base) PS E:\assessment> node q7.js
// John is studying.
// John is taking a break.
// Alice is studying.
// Alice is taking a break.
// Alice is attending a class.
