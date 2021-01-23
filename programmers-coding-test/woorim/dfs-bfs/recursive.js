function factorialIteractive(n) {
  result = 1;
  for (let i  = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n <= 2) return 2;
  return n * factorialRecursive(n - 1);
}

console.log(factorialIteractive(5));
console.log(factorialRecursive(5));
