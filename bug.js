function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //This line causes the error
  }
  return a / b;
}
console.log(foo(10, 0)); // Output: Infinity
console.log(foo(0, 10)); // Output: Infinity
console.log(foo(0, 0));   // Output: 0