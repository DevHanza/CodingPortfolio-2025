/*
 ***********************************************
 *     JavaScript Closures: Interview Q&A     *
 ***********************************************
 */

/* 
   Q1: Loop with var and setTimeout
*/

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

/*
   Simple explanation:
   - When JS sees `var i`, it creates a variable in memory: i = undefined.
   - Each time we do i = 0, 1, 2, we just update that same variable.
   - When the loop finishes, i = 3.
   - setTimeout runs later and uses the current value of i (3) for all calls.
   - Result prints: 3, 3, 3
*/

/* 
   Fix using let:
*/

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

/*
   Simple explanation:
   - `let` is block-scoped. Each loop iteration gets a brand new `i`.
   - Closures in setTimeout remember the value for that iteration.
   - Result prints: 0, 1, 2
*/

/* 
   Q2: Function that creates a private variable
*/

function createSecretNumber() {
  let secret = 42; // private variable
  return function guess(num) {
    if (num === secret) {
      return "Correct!";
    } else {
      return "Try again!";
    }
  };
}

const guessNumber = createSecretNumber();

console.log(guessNumber(10)); // Try again!
console.log(guessNumber(42)); // Correct!

/*
   Simple explanation:
   - secret is only visible inside createSecretNumber.
   - Normally variables disappear after function finishes.
   - Closure keeps secret alive so the inner function can use it later.
*/

/* 
   Q3: Function factory example
*/

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*
   Simple explanation:
   - factor is "remembered" by the inner function.
   - Each returned function keeps its own factor value.
   - Useful for creating specialized functions quickly.
*/

/* 
   Q4: Incrementing variable with closure
*/

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counterA = counter();
counterA(); // Count: 1
counterA(); // Count: 2

const counterB = counter();
counterB(); // Count: 1 (separate closure)

/*
   Simple explanation:
   - Each counter() call creates a new closure with its own count.
   - Inner function can read and change count.
   - Closure keeps the variable alive after outer function finishes.
*/

/* 
   *******************************************************
   * Key Interview Takeaways on Closures                 *
   *******************************************************
   - Closures happen when a function uses variables from another function.
   - var creates a variable with undefined, then assignments update it.
   - Closures always use the latest value of the variable.
   - Useful for:
       * Keeping variables private
       * Remembering state between calls
       * Making reusable helper functions
   - Understanding var vs let vs const is important for interviews.
*/
