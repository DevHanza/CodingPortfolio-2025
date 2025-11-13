/*
=====================================
5. ACCESSORS & ENCAPSULATION
=====================================

 *  ✅ Learn:
 *    1. get and set syntax
 *    2. private fields (#field)
 *    3. computed properties with accessors
 *
*/

/*
------------
Basic `get` and `set`
------------
*/

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // getter for fullName (computed property)
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // setter for fullName (splits into first & last)
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1] || "";
  }
}

const user = new User("Kyle", "Smith");
console.log(user.fullName); // Kyle Smith

user.fullName = "Sarah Johnson";
console.log(user.firstName); // Sarah
console.log(user.lastName); // Johnson

// Accessors let you:
// - Read a property via `get`
// - Update a property via `set`
// - Compute values dynamically
//

/*
------------
Private Fields
------------
*/

class User {
  // private fields (cannot be accessed outside)
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  set fullName(name) {
    const parts = name.split(" ");
    this.#firstName = parts[0];
    this.#lastName = parts[1] || "";
  }
}

const user = new User("Kyle", "Smith");
console.log(user.fullName); // Kyle Smith

user.fullName = "Sarah Johnson";
console.log(user.fullName); // Sarah Johnson

// Trying to access private field directly fails
console.log(user.#firstName); // ❌ SyntaxError

// Private Fields (#field)
// ----------------------
// - Only accessible inside the class
// - Protects internal data
// - Must be declared with #

/*
------------
Accessors for Computed Properties
------------
*/
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = value / this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50

rect.area = 100;
console.log(rect.width); // 10 (width updated to match area)

// Computed Accessors:
// - getter computes value on the fly
// - setter allows controlled updates

/*
========================================
🧠 SUMMARY NOTES
========================================

get            →  read a property like a variable
set            →  write/update a property like a variable
#privateField  →  keeps data internal to class
Computed props →  accessors can calculate values dynamically
Encapsulation  →  control how data is accessed & modified
*/
