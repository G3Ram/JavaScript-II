// Create a higher order function and invoke the callback function to test your work. You have been provided an example of
//a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure
//out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum", "yo-yo", "Gum", "star"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
/************ CHALLENGE 1 - GET ARRAY LENGTH *******************/
// TEMPLATE
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  //console.log("In getLength");
  return cb(arr.length);
}

// CALLBACK FUNCTION TO PRINT ARRAY LENGTH
function printArrLength(arr) {
  console.log(
    "\n---------------------CHALLENGE 1 - ARRAY LENGTH ----------------------"
  );
  console.log("\nLength of the array is " + arr);
}

// INVOCATION
getLength(items, printArrLength);

/************ CHALLENGE 1 - GET ARRAY LENGTH *******************/

/************ CHALLENGE 2 - GET LAST ITEM IN THE ARRAY *******************/
// TEMPLATE
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

// CALLBACK FUNCTION TO PRINT LAST ITEM IN THE ARRAY
function printLastArray(lastElement) {
  console.log(
    "\n---------------------CHALLENGE 2 - LAST ELEMENT IN AN ARRAY----------------------"
  );
  console.log("\nThe last element in the array is " + lastElement);
}

// INVOCATION
last(items, printLastArray);

/************ CHALLENGE 2 - GET LAST ITEM IN THE ARRAY *******************/

/************ CHALLENGE 3 - Sum two numbers *******************/

// TEMPLATE
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

// CALLBACK
function printSumNums(result) {
  console.log(
    "\n---------------------CHALLENGE 3 - PRINT SOLUTION TO SUM NUM----------------------"
  );
  console.log("\nThe sum of two numbers is " + result);
}

//INVOCATION
sumNums(2, 3, printSumNums);
/************ CHALLENGE 3 - Sum two numbers *******************/

/************ CHALLENGE 4 - Multiply two numbers *******************/
// TEMPLATE
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

// CALL BACK
function printMultiplyNums(result) {
  console.log(
    "\n---------------------CHALLENGE 4 - PRINT SOLUTION TO MULTIPLY NUM----------------------"
  );
  console.log("\nThe product of two numbers is " + result);
}

// INVOCATION
multiplyNums(2, 3, printMultiplyNums);

/************ CHALLENGE 4 - Multiply two numbers *******************/
/************ CHALLENGE 5 - CONTAINS *******************/
// TEMPLATE
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

// CALL BACK
function printContains(result) {
  console.log(
    "\n---------------------CHALLENGE 5 - CONTAINS ITEM IN ARRAY? ----------------------"
  );
  console.log("\nDoes the array contain the item? " + result);
}

// INVOCATION
contains("yo-yo", items, printContains);
contains("ha ha ha", items, printContains);

/************ CHALLENGE 5 - CONTAINS*******************/
/* STRETCH PROBLEM */
// TEMPLATE
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let dupFreeArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!dupFreeArr.includes(array[i])) {
      dupFreeArr.push(array[i]);
    }
  }
  return cb(dupFreeArr);
}

// CALL BACK
function printRemoveDuplicates(result) {
  console.log(
    "\n---------------------STRETCH CHALLENGE - REMOVE DUPLICATES ----------------------"
  );
  console.log("\nDuplicate free array " + result);
  console.log(
    "\n----------------------------------------------------------------------------------"
  );
}

// INVOCATION
removeDuplicates(items, printRemoveDuplicates);
