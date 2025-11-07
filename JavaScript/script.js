"use strict";

// const json = {
//     name: "John",
//     age: 30,
//     city: "New York",
// };

// const json1 = { ...json };

// json1.age = 31;

// console.log(json); // Output: 30
// console.log(json1); // Output: 31

// const json2 = { ...json };

// json2.age = 32;

// console.log(json.age); // Output: 31
// console.log(json2.age); // Output: 32

// const json3 = JSON.parse(JSON.stringify(json));

// json3.age = 33;

// console.log(json.age); // Output: 31
// console.log(json3.age); // Output: 33

// console.log(23 === 23.1);

// console.log(Math.PI);

// const date = new Date(2047, 10, 19, 15, 23);

// console.log(date.getYear());

// const Person = function (name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function () {
//         console.log(
//             `Hello, my name is ${this.name} and I am ${this.age} years old.`
//         );
//     };
// };

// const me = new Person("Vaishnav", 23);

// me.greet();

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

// Array.prototype.sum = function () {
//     return this.reduce((acc, val) => acc + val, 0);
// };

// console.log(arr.sum());

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };

// console.log(arr.unique());

// class PersonCl {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getVars() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }

//     get age() {
//         return this._age;
//     }

//     set age(value) {
//         this._age = value;
//     }
// }

// const person1 = new PersonCl("Alice", 28);

// console.log(person1.getVars());

// const person2 = new PersonCl("Bob", 34);

// console.log(person2.getVars());

// const person3 = new PersonCl("Charlie", 22);

// console.log(person3.getVars());

// console.log(person1.age);
// person2.age = 35;
// console.log(person1.age);

// console.log(person2.getVars());

// const bob = {
//     name: "Bob",
//     age: 34,

//     get getAge() {
//         return this.age;
//     },

//     set setAge(age) {
//         this.age = age;
//     },
// };
// console.log(bob.getAge);
// bob.setAge = 36;
// console.log(bob.getAge);

// console.log(Array.from("Vaishnav"));

// const Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// };

// // STATIC METHOD - belongs to constructor function itself
// Person.createAdult = function (name) {
//     return new Person(name, 18); // Factory method
// };

// Person.isValidAge = function (age) {
//     return age >= 0 && age <= 120; // Utility method
// };

// Person.compare = function (person1, person2) {
//     return person1.age - person2.age; // Helper method
// };

// // PROTOTYPE METHOD - belongs to all instances
// Person.prototype.greet = function () {
//     console.log(
//         `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
// };

// Person.prototype.haveBirthday = function () {
//     this.age++;
//     console.log(`Happy birthday! Now I'm ${this.age} years old.`);
// };

// const Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// };

// // STATIC METHOD - belongs to constructor function itself
// Person.createAdult = function (name) {
//     return new Person(name, 18); // Factory method
// };

// Person.isValidAge = function (age) {
//     return age >= 0 && age <= 120; // Utility method
// };

// Person.compare = function (person1, person2) {
//     return person1.age - person2.age; // Helper method
// };

// // PROTOTYPE METHOD - belongs to all instances
// Person.prototype.greet = function () {
//     console.log(
//         `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
// };

// Person.prototype.haveBirthday = function () {
//     this.age++;
//     console.log(`Happy birthday! Now I'm ${this.age} years old.`);
// };

// // Usage examples:
// const me = new Person("Vaishnav", 23);
// const adult = Person.createAdult("John"); // Static method usage

// // ADDING METHOD TO SPECIFIC INSTANCE
// me.sayHello = function () {
//     console.log(`Hi there! I'm ${this.name}!`);
// };

// // Adding a different method to another instance
// adult.introduce = function () {
//     console.log(
//         `Nice to meet you! I'm ${this.name} and I'm ${this.age} years old.`
//     );
// };

// // Adding method with different behavior to same instance
// me.specialGreeting = function (friend) {
//     console.log(`Hey ${friend}! It's me, ${this.name}. Let's hang out!`);
// };

// console.log("=== Static Methods ===");
// console.log("Is 25 valid age?", Person.isValidAge(25)); // true
// console.log("Is -5 valid age?", Person.isValidAge(-5)); // false
// console.log("Age comparison:", Person.compare(me, adult)); // 5

// console.log("\n=== Instance Methods (Prototype) ===");
// me.greet(); // Available to all instances
// adult.greet(); // Available to all instances

// console.log("\n=== Instance-Specific Methods ===");
// me.sayHello(); // Only available to 'me' instance
// me.specialGreeting("Alice"); // Only available to 'me' instance

// adult.introduce(); // Only available to 'adult' instance

// // This will cause an error because 'adult' doesn't have 'sayHello'
// // adult.sayHello(); // TypeError: adult.sayHello is not a function

// // This will cause an error because 'me' doesn't have 'introduce'
// // me.introduce(); // TypeError: me.introduce is not a function

// console.log("\n=== Checking method existence ===");
// console.log("Does 'me' have sayHello?", typeof me.sayHello === "function");
// console.log(
//     "Does 'adult' have sayHello?",
//     typeof adult.sayHello === "function"
// );
// console.log(
//     "Does 'adult' have introduce?",
//     typeof adult.introduce === "function"
// );
// console.log("Does 'me' have introduce?", typeof me.introduce === "function");

// // / Adding a different method to another instance
// adult.introduce = function () {
//     console.log(
//         `Nice to meet you! I'm ${this.name} and I'm ${this.age} years old.`
//     );
// };

// // Adding method with different behavior to same instance
// me.specialGreeting = function (friend) {
//     console.log(`Hey ${friend}! It's me, ${this.name}. Let's hang out!`);
// };

// console.log("=== Static Methods ===");
// console.log("Is 25 valid age?", Person.isValidAge(25)); // true
// console.log("Is -5 valid age?", Person.isValidAge(-5)); // false
// console.log("Age comparison:", Person.compare(me, adult)); // 5

// console.log("\n=== Instance Methods (Prototype) ===");
// me.greet(); // Available to all instances
// adult.greet(); // Available to all instances

// console.log("\n=== Instance-Specific Methods ===");
// me.sayHello(); // Only available to 'me' instance
// me.specialGreeting("Alice"); // Only available to 'me' instance

// adult.introduce(); // Only available to 'adult' instance

// // This will cause an error because 'adult' doesn't have 'sayHello'
// // adult.sayHello(); // TypeError: adult.sayHello is not a function

// // This will cause an error because 'me' doesn't have 'introduce'
// // me.introduce(); // TypeError: me.introduce is not a function

// console.log("\n=== Checking method existence ===");
// console.log("Does 'me' have sayHello?", typeof me.sayHello === "function");
// console.log(
//     "Does 'adult' have sayHello?",
//     typeof adult.sayHello === "function"
// );
// console.log(
//     "Does 'adult' have introduce?",
//     typeof adult.introduce === "function"
// );
// console.log("Does 'me' have introduce?", typeof me.introduce === "function");

// class PersonCl {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(
//             `Hello, my name is ${this.name} and I am ${this.age} years old.`
//         );
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     study() {
//         console.log(
//             `${this.name} is studying & her student id is ${this.studentId}.`
//         );
//     }
// }

// class TopperCl extends StudentCl {
//     constructor(name, age, studentId, gpa) {
//         super(name, age, studentId);
//         this.gpa = gpa;
//     }

//     displayGPA() {
//         console.log(`${this.name} has a GPA of ${this.gpa}.`);
//     }
// }

// const student1 = new StudentCl("Alice", 20, "S12345");

// student1.greet();
// student1.study();

// const topper1 = new TopperCl("Bob", 22, "S54321", 3.9);
// console.log(topper1);

// const proto = {
//     greet: function () {
//         console.log(
//             `Hello, my name is ${this.name} and I am ${this.age} years old.`
//         );
//     },
//     fn: function () {
//         console.log("Function in proto");
//     },
// };

// const joave = Object.create(proto);

// const PersonProto = Object.create(proto);

// const jay = Object.create(PersonProto);

// console.dir(joave);
// console.dir(PersonProto);
// console.dir(jay);

// class Account {
//     #movements = [];

//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//     }

//     #logIntoMovements(val) {
//         this.#movements.push(val);
//     }

//     deposit(amount) {
//         this.balance += amount;
//         this.#logIntoMovements(+amount);
//         console.log(
//             `Deposited ${amount}. New balance for ${this.owner} is ${this.balance}.`
//         );
//     }

//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log("Insufficient funds.");
//             return;
//         }
//         this.balance -= amount;
//         this.#logIntoMovements(-amount);
//         console.log(
//             `Withdrew ${amount}. New balance for ${this.owner} is ${this.balance}.`
//         );
//     }

//     // deposit(account, amount) {
//     //     account.balance += amount;
//     //     console.log(
//     //         `Deposited ${amount}. New balance for ${account.owner} is ${account.balance}.`
//     //     );
//     // }
// }

// const acc1 = new Account("Vaishnav", 1000);

// acc1.deposit(500);
// acc1.withdraw(200);
// acc1.withdraw(2000);
// // acc1.logIntoMovements(300);
// // console.log(acc1);

// Account.deposit(2000);
// console.log(Account.balance);

// const request = new XMLHttpRequest();

// console.log(request);

// console.log(XMLHttpRequest);

//github.com/public-apis/public-apis/blob/master/README.md

import axios from "axios";

console.log(axios);
