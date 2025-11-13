/*
=====================================
2. INSTANCE FIELDS & PRIVATE DATA
=====================================

 *  ✅ Learn:
 *    1. Public instance fields
 *    2. Private fields using #
 *    3. Private methods
 *    4. Default property values
 *
 ******************************************************
*/

/*
------------
1️⃣ Public Instance Fields
------------
*/

class Player {
  name; // public field (can be read/written anywhere)
  score; // public field

  constructor(name) {
    this.name = name;
    this.score = 0; // initialized in constructor
  }

  increaseScore() {
    this.score++;
  }
}

const p1 = new Player("Hansana");
p1.increaseScore();
console.log(p1.name, p1.score); // Hansana 1
p1.score = 100; // still accessible — public!
console.log(p1.score); // 100

/*
------------
2️⃣ Private Fields Using #
------------
*/

class SecretPlayer {
  #score = 0; // private field (only accessible inside the class)
  name;

  constructor(name) {
    this.name = name;
  }

  increaseScore() {
    this.#score++;
  }

  showScore() {
    console.log(`${this.name}'s score is ${this.#score}`);
  }
}

const sp = new SecretPlayer("Luna");
sp.increaseScore();
sp.showScore(); // Luna's score is 1
// console.log(sp.#score); ❌ SyntaxError: Private field '#score' must be declared in an enclosing class

/*
---------------------------------------------------------
🧠 NOTE:
- The # symbol makes a field private to the class body.
- You CANNOT access it outside, even by accident.
- It’s like closures, but now built into class syntax.
---------------------------------------------------------
*/

/*
------------
3️⃣ Private Methods
------------
*/

class TemperatureConverter {
  #toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  #toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Public method that uses the private ones
  convert(value, type) {
    if (type === "C") {
      console.log(`${value}°F = ${this.#toCelsius(value).toFixed(1)}°C`);
    } else if (type === "F") {
      console.log(`${value}°C = ${this.#toFahrenheit(value).toFixed(1)}°F`);
    } else {
      console.log("Please use 'C' for Celsius or 'F' for Fahrenheit.");
    }
  }
}

const temp = new TemperatureConverter();
temp.convert(100, "C"); // 100°F = 37.8°C
temp.convert(0, "F"); // 0°C = 32.0°F
// temp.#toCelsius(100); ❌ Error: Private method cannot be accessed

/*
---------------------------------------------------------
🧠 NOTE:
- #toCelsius() and #toFahrenheit() are private helpers.
- They can’t be used outside the class.
- Only convert() can call them internally.
---------------------------------------------------------
*/

/*
------------
4️⃣ Default Property Values
------------
*/

class Todo {
  title = "Untitled"; // default public field
  completed = false; // default value
  #createdAt = new Date(); // private default field

  constructor(title) {
    if (title) this.title = title;
  }

  info() {
    console.log(`[${this.completed ? "✅" : "❌"}] ${this.title}`);
  }

  #timestamp() {
    return this.#createdAt.toLocaleString();
  }

  showDetails() {
    console.log(`${this.title} was created on ${this.#timestamp()}`);
  }
}

const todo = new Todo("Finish Stage 2");
todo.info(); // ❌ Finish Stage 2
todo.showDetails(); // shows private date info

/*
------------
✅ Quick Summary
------------
🟩 Public fields
   → Declared without #, accessible everywhere.

🟪 Private fields (#)
   → Declared with #, only inside the class.

🟦 Private methods
   → Also start with #, used internally only.

🟨 Default values
   → You can initialize fields directly in class body.

---------------------------------------------------------
💡 Tip:
Think of private fields (#) as class-level closures —
each instance keeps its own private data safely stored.
=========================================================
*/
