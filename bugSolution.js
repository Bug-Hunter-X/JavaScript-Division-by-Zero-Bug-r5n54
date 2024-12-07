function foo(a, b) {
  if (b === 0) {
    return Infinity; //This line causes the error
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}
console.log(foo(10, 0)); // Output: Infinity
console.log(foo(0, 10)); // Output: 0
console.log(foo(0, 0));   // Output: Infinity