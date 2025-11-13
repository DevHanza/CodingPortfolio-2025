/*
=====================================
6. ADVANCED CLASS BEHAVIOR
=====================================

 *  ✅ Learn:
 *    1. Initialization order
 *    2. Arrow vs regular methods
 *    3. Classes as syntactic sugar for prototypes
 *
*/

/*
------------
Initialization Order: Fields vs Constructor
------------
*/

class Example {
  // Class fields run first, before constructor
  field1 = "field1 default";

  constructor() {
    console.log("Inside constructor");
    console.log("field1:", this.field1);
    this.field2 = "field2 set in constructor";
  }
}

const ex = new Example();
// Output:
// Inside constructor
// field1: field1 default
console.log(ex.field2); // field2 set in constructor

// Initialization order:
// [Class fields] → [Constructor body]

/*
------------
Arrow Functions vs Regular Methods (this binding)
------------
*/

class Tester {
  constructor(name) {
    this.name = name;
  }

  regularMethod() {
    console.log("Regular:", this.name);
  }

  arrowMethod = () => {
    console.log("Arrow:", this.name);
  };
}

const t = new Tester("Kyle");

t.regularMethod(); // Regular: Kyle
t.arrowMethod(); // Arrow: Kyle

const reg = t.regularMethod;
const arr = t.arrowMethod;

reg(); // Regular: undefined (lost 'this')
arr(); // Arrow: Kyle (keeps lexical 'this')

// Arrow Methods:
// - Bind `this` lexically
// - Safe when passing methods as callbacks

// Regular Methods:
// - `this` depends on how method is called

/*
------------
ASCII Diagram: Arrow vs Regular Method
------------
*/

//   Tester Instance
// -------------------
// | name: 'Kyle'    |
// | arrowMethod --->|----> bound to instance
// -------------------
//         ^
//         |
// regularMethod ----> on prototype, 'this' determined by call site

/*
------------
Classes are Syntactic Sugar for Prototypes
------------
*/
// CLASS VERSION
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const p = new Person("Kyle");
p.greet(); // Hi, I am Kyle

// PROTOTYPE VERSION (manual)
function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.greet = function () {
  console.log("Hi, I am " + this.name);
};

const p2 = new PersonProto("Kyle");
p2.greet(); // Hi, I am Kyle

// Key takeaway:
// class syntax = cleaner way to do what prototypes have always done

/*
------------
Manual Prototype System Example
------------
*/
// Step 1: Constructor function
function Animal(type) {
  this.type = type;
}

// Step 2: Prototype methods
Animal.prototype.speak = function () {
  console.log(this.type + " makes a sound");
};

// Step 3: Create instance
const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

// Equivalent class syntax:
// class Animal {
//   constructor(type) { this.type = type }
//   speak() { console.log(this.type + ' makes a sound') }
// }

// ========================================
// 🧠 SUMMARY NOTES
// ========================================

// Initialization order  → Fields first, then constructor body
// Arrow methods         → Lexically bind 'this'
// Regular methods       →'this' depends on call site
// Class vs Prototype    → class = syntactic sugar for prototype-based OOP
// Manual prototype      → helps understand inheritance mechanics
