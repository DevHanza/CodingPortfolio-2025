/*
=====================================
7. MIXINS & MULTIPLE BEHAVIORS
=====================================

 *  ✅ Learn:
 *    1. Functional mixin pattern
 *    2. Composing multiple traits
 *    3. Build Jumpable, Runnable, Flyable
 *
*/

/*
------------
The Problem with Deep Inheritance
------------
*/

// SuperHero → FlyingHero → LaserHero → InvisibleHero ...
//        ↓          ↓          ↓
//      too deep, too complex, hard to reuse!

/*
------------
Functional Mixin Pattern
------------
*/

// A mixin is just a function that adds properties/methods
// to an existing class prototype

const Jumpable = (Base) =>
  class extends Base {
    jump() {
      console.log(`${this.name} jumps high! 🦘`);
    }
  };

const Runnable = (Base) =>
  class extends Base {
    run() {
      console.log(`${this.name} runs fast! 🏃‍♂️`);
    }
  };

const Flyable = (Base) =>
  class extends Base {
    fly() {
      console.log(`${this.name} flies through the sky! 🦅`);
    }
  };

/*
------------
Composing Multiple Mixins
------------
*/

// Base class
class Character {
  constructor(name) {
    this.name = name;
  }
}

// Compose mixins manually (right to left)
class SuperHero extends Flyable(Runnable(Jumpable(Character))) {
  usePower() {
    console.log(`${this.name} uses their ultimate power! 💥`);
  }
}

const hero = new SuperHero("SkyRunner");

hero.jump(); // SkyRunner jumps high! 🦘
hero.run(); // SkyRunner runs fast! 🏃‍♂️
hero.fly(); // SkyRunner flies through the sky! 🦅
hero.usePower(); // SkyRunner uses their ultimate power! 💥

/* 

=============================
 Mixins Composition Diagram
=============================

Character  →  Jumpable  →  Runnable  →  Flyable  →  SuperHero

 Each layer adds new behavior:
   +--------------------+
   | Jumpable: jump()   |
   | Runnable: run()    |
   | Flyable:  fly()    |
   +--------------------+

*/

/*
------------
How It Works Internally
------------
*/

// Flyable(Runnable(Jumpable(Character)))
// expands roughly to:

class JumpableCharacter extends Character {
  jump() {
    // ...
  }
}

class RunnableCharacter extends JumpableCharacter {
  run() {
    // ...
  }
}

class FlyableCharacter extends RunnableCharacter {
  fly() {
    // ...
  }
}

class SuperHero extends FlyableCharacter {
  usePower() {}
}

/* 

         +---------------------+
         |      Character      |
         +---------------------+
                    |
                    v
         +---------------------+
         |      Jumpable       |
         +---------------------+
                    |
                    v
         +---------------------+
         |      Runnable       |
         +---------------------+
                    |
                    v
         +---------------------+
         |       Flyable       |
         +---------------------+
                    |
                    v
         +---------------------+
         |      SuperHero      |
         +---------------------+
         
*/

// ========================================
// 🧠 SUMMARY NOTES
// ========================================

// Functional mixin → function that returns a subclass
// Compose behaviors → apply multiple mixins to one class
// Flexible reuse    → avoid deep inheritance trees
// Order matters     → rightmost mixin applied first
