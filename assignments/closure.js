// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function createStack() {
  let elements = [];
  function display() {
    console.log(elements);
  }
  return {
    push: function(el) {
      elements.unshift(el);
      display();
    },
    pop: function() {
      return elements.shift();
    }
  };
}

let stack = createStack();
stack.push("Yes");
stack.push("no");
stack.pop();
stack.push("hello");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function() {
    count++;
    return count;
  };
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage:
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  //function counterFactory() {
  let countVal = 0;

  function display(type) {
    console.log("Counter value " + type + " is " + countVal);
  }
  function increment() {
    countVal = countVal + 1;
    display("increment");
  }
  function decrement() {
    countVal = countVal - 1;
    display("decrement");
  }
  return {
    increment: increment,
    decrement: decrement
  };
};

let newCntrFactory = counterFactory();
newCntrFactory.increment();
newCntrFactory.decrement();
newCntrFactory.decrement();
newCntrFactory.decrement();
newCntrFactory.increment();
newCntrFactory.increment();
newCntrFactory.increment();
