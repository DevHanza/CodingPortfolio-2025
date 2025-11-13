/*
=====================================
3. STATIC MEMBERS
=====================================

 *  ✅ Learn:
 *    1. Classes & Instances
 *    2. Static Methods and Properties
 *    3. When to use Static Utilities
 *    4. Static Initialization Blocks (ES2022+)
 *
*/

/*
------------
1️⃣ Classes & Instances — The Basics
------------
*/

class Car {
  brand;
  speed = 0;

  constructor(brand) {
    this.brand = brand;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} is now going ${this.speed} km/h`);
  }
}

const car1 = new Car("Toyota");
const car2 = new Car("Tesla");

car1.accelerate(); // Toyota is now going 10 km/h
car2.accelerate(); // Tesla is now going 10 km/h

/*
---------------------------------------------------------
🧠 NOTE:
- Each time we do `new Car()`, we create an INSTANCE.
- Each instance has its own data (brand, speed).
- So far, everything belongs to individual objects.
---------------------------------------------------------
*/

/*
------------
2️⃣ Static Methods & Properties
------------
*/

class MathHelper {
  static description = "Simple math helper utilities"; // static property

  // static method — called on the class itself
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathHelper.description);
console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.subtract(10, 4)); // 6
// const m = new MathHelper(); ❌ Not needed for static methods

/*
---------------------------------------------------------
🧠 NOTE:
- `static` means it belongs to the CLASS, not instances.
- You call it like `MathHelper.add()`, not on an object.
- Great for shared utilities or factory functions.
---------------------------------------------------------
*/

/*
------------
3️⃣ When to Use Static Utilities
------------
*/

class Circle {
  radius;
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  // ✅ Static property — a constant shared by all
  static PI = Math.PI;

  // ✅ Static utility — creates a circle from diameter
  static fromDiameter(diameter) {
    return new Circle(diameter / 2);
  }
}

const c1 = new Circle(5);
const c2 = Circle.fromDiameter(10); // use static "factory" method

console.log("Circle area:", c1.area().toFixed(2)); // 78.54
console.log("Circle from diameter:", c2.area().toFixed(2)); // 78.54
console.log("Shared constant:", Circle.PI);

/*
---------------------------------------------------------
🧠 NOTE:
- Use static methods when behavior doesn’t depend
  on any *specific* object instance.
- Example: factories (`fromSomething`), math helpers,
  validation, or constants.
---------------------------------------------------------
*/

/*
------------
4️⃣ Static Initialization Block (ES2022+)
------------
*/

class Config {
  static settings = {};

  // runs once when the class is first loaded
  static {
    console.log("Initializing config...");
    Config.settings = {
      theme: "dark",
      version: "1.0.0",
    };
  }

  static show() {
    console.log("Current settings:", Config.settings);
  }
}

Config.show(); // runs after static block initialization

/*
---------------------------------------------------------
🧠 NOTE:
- Static blocks run only once when the class is evaluated.
- Useful for setup, configuration, or precomputing values.
---------------------------------------------------------
*/

/*
------------
✅ Why This Is Useful in Real Life
------------
🏗  Static members give you:
   - **Shared tools** that don't depend on a specific object
   - **Centralized constants** (like PI or configuration)
   - **Factory methods** to create instances in custom ways
   - **Initialization hooks** for setup logic

💡 Real-world uses:
   - Utility classes (e.g., Math, Date, JSON)
   - Database or config managers with shared settings
   - Game engines (e.g., static `Game.start()`)
   - Logging or analytics systems (shared state)

In simple words:
👉 Static means “belongs to the blueprint, not the copy.”
   Every object can use the same shared logic or constant
   without making new duplicates.

=========================================================
*/
