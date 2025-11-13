/*
=====================================
1. SYNTAX & STRUCTURE
=====================================
*/

// === CLASS DECLARATION ===

// Most common way to define a class
class Person {
  // The constructor runs automatically when you create a new instance
  constructor(name, age) {
    this.name = name; // "this" refers to the instance being created
    this.age = age;
  }

  // Instance method — accessible by all Person objects
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }

  // You can add as many methods as you want
  haveBirthday() {
    this.age++;
    console.log(`${this.name} just turned ${this.age}!`);
  }
}

// === CREATING INSTANCES ===

// The 'new' keyword creates an object from the class blueprint
const person1 = new Person("Kyle", 25);
const person2 = new Person("Sarah", 30);

person1.greet(); // Hi, I'm Kyle and I'm 25 years old.
person2.greet(); // Hi, I'm Sarah and I'm 30 years old.

person1.haveBirthday(); // Kyle just turned 26!

// === CLASS EXPRESSION ===
// Less common but valid — like assigning an anonymous function
const Animal = class {
  constructor(species) {
    this.species = species;
  }
  speak() {
    console.log(`${this.species} makes a sound.`);
  }
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.

// === "this" KEYWORD ===

class Tester {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log("Normal Method:", this.name);
  }

  sayNameArrow = () => {
    // Arrow functions "bind" this automatically to where they are defined
    console.log("Arrow Function:", this.name);
  };
}

const test = new Tester("Kyle");

// Direct method call works fine
test.sayName(); // Normal Method: Kyle
test.sayNameArrow(); // Arrow Function: Kyle

// Let's "extract" the methods
const methodRef = test.sayName;
const arrowRef = test.sayNameArrow;

// This one loses its 'this' binding — 'this' becomes undefined in strict mode
methodRef(); // Normal Method: undefined

// Arrow functions keep the 'this' of where they were created
arrowRef(); // Arrow Function: Kyle
