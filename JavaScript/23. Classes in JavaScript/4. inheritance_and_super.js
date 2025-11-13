/*
=====================================
4. INHERITANCE & SUPER
=====================================

 *  ✅ Learn:
 *    1. 'extends' keyword
 *    2. 'super() 'in constructors
 *    3. Method overriding (polymorphism)
 *
*/

/*
------------
The `extends` Keyword
------------
*/

// Parent Class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// Child Class (inherits from Person)

class Employee extends Person {
  constructor(name, position) {
    // 'super' calls the parent constructor
    super(name);
    this.position = position;
  }

  work() {
    console.log(`${this.name} is working as a ${this.position}`);
  }
}

// Create instance
const emp = new Employee("Kyle", "Developer");

emp.greet(); // -> from Person class
emp.work(); // -> from Employee class

/*
Inheritance Structure:

   +-------------+
   |   Person    |
   |-------------|
   | name        |
   | greet()     |
   +-------------+
          |
          |
   +-------------+
   |  Employee   |
   |-------------|
   | position    |
   | work()      |
   +-------------+

*/

/*
------------
Method Overriding (Polymorphism)
------------
*/

class Person {
  greet() {
    console.log("👋 Hello, I'm a person.");
  }
}

class Employee extends Person {
  // Override parent greet()
  greet() {
    console.log("💼 Hello, I'm an employee.");
  }
}

const p = new Person();
const e = new Employee();

p.greet(); // 👋 Hello, I'm a person.
e.greet(); // 💼 Hello, I'm an employee.

/*
------------
Using `super()` to Call Parent Methods
------------
*/

class Person {
  greet() {
    console.log("Hi, I'm a person.");
  }
}

class Employee extends Person {
  greet() {
    // Call the parent version first
    super.greet();
    console.log("...and also an employee!");
  }
}

const emp1 = new Employee();
emp1.greet();

// Output:
// Hi, I'm a person.
// ...and also an employee!

// Flow:
//  Employee.greet()
//    → super.greet()  // calls Person.greet()
//    → logs extra message
