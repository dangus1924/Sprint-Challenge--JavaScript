// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

let consume = (con) => con.cb(con);

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = (sum) => sum.a + sum.b;

let multiply = (product) => product.a * product.b;

let greeting = (greet) => `Hello ${greet.name}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume({
  a: 2,
  b: 2,
  cb: add})); // 4

console.log(consume({
  a: 10,
  b: 16,
  cb: multiply})); // 160
console.log(consume({
  name: "Mary Poppins",
  cb: greeting})); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//the variables is passed down the scope chain to all nested functions.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();