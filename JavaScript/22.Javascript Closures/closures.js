/******************************************************
 *    JAVASCRIPT CLOSURES   *
 ******************************************************
 *
 *  A closure is when a function "remembers" variables
 *  from where it was created — even after that scope
 *  has finished executing.
 *
 ******************************************************/

/*
=========================================================
=  🧩  BASIC EXAMPLE — FUNCTION INSIDE FUNCTION          =
=========================================================
*/

function outer() {
  let counter = 0; // <-- variable lives in outer's scope

  function inner() {
    counter++; // inner still has access to counter
    console.log("Counter is now:", counter);
  }

  return inner;
}

// When we call outer(), it returns the inner() function
const count = outer();

// Each call to count() remembers its own counter variable
count(); // Counter is now: 1
count(); // Counter is now: 2
count(); // Counter is now: 3

/*
---------------------------------------------------------
🧠 NOTE:
- The variable "counter" would normally disappear
  once outer() finishes running.
- But since inner() still references it,
  JavaScript keeps it alive — that’s the closure!
---------------------------------------------------------
*/

/*
=========================================================
=  ⚙️  FACTORY FUNCTION EXAMPLE — CONFIGURABLE FUNCTIONS =
=========================================================
*/

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*
---------------------------------------------------------
🧠 NOTE:
Each returned function "remembers" its own multiplier.
That’s why double() always multiplies by 2,
while triple() always multiplies by 3.
---------------------------------------------------------
*/

/*
=========================================================
=  🔒  PRIVATE DATA EXAMPLE — HIDING VARIABLES           =
=========================================================
*/

function makeUser(name) {
  let score = 0; // private variable

  return {
    getName: () => name,
    increaseScore: () => score++,
    getScore: () => score,
  };
}

const user1 = makeUser("Hansana");
user1.increaseScore();
user1.increaseScore();

console.log("User:", user1.getName());
console.log("Score:", user1.getScore()); // 2
console.log("Trying to access score directly:", user1.score); // undefined

/*
---------------------------------------------------------
🧠 NOTE:
No one outside makeUser() can change `score` directly.
Closures make private data possible — just like private
fields in classes, but with simpler syntax.
---------------------------------------------------------
*/

/*
=========================================================
=  💼  THE "BACKPACK" MENTAL MODEL (Kyle’s analogy)     =
=========================================================

Imagine every function carries a little BACKPACK 🎒
with all the variables from where it was created.

When we return inner() from outer(), inner() takes
its backpack with it — inside is `counter`.

Even after outer() is done, the backpack stays alive,
because inner() is still using it.
=========================================================
*/

/*
=========================================================
=  ✅  QUICK SUMMARY                                    =
=========================================================

1️⃣ Every time you create a function inside another function,
    the inner function forms a closure.

2️⃣ That closure "remembers" variables from its original scope.

3️⃣ Closures are perfect for:
     - Persistent state (like counters)
     - Private data (hiding variables)
     - Function factories (custom behaviors)

=========================================================
*/
