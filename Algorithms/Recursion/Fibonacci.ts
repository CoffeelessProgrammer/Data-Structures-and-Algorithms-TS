// ---------------- Fibonacci Sequence ----------------
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

// Time Complexity: O(2^n)  Space Complexity: O(2^n)
function fibonacciRecursive(nthElement: number): number | any {
  // Base Cases
  if (nthElement === 1) return 0;
  if (nthElement === 2) return 1;
  //Input Validation
  if (nthElement < 1) return undefined;

  // Recursive Call: The nth element equals the sum of the previous 2 elements.
  return fibonacciRecursive(nthElement-2) + fibonacciRecursive(nthElement-1);
}

// Time Complexity: O(n)  Space Complexity: O(1)
function fibonacciIterative(nthElement: number): number | undefined {
  if (nthElement < 1) return undefined;
  else nthElement = Math.floor(nthElement);

  let previous = 0;
  let current = 1;

  if (nthElement === 1) return previous;
  if (nthElement === 2) return current;

  let fibonacci: number = 0;

  for (let i = 3; i <= nthElement; ++i) {
    fibonacci = previous + current;
    previous = current;
    current = fibonacci;
  }

  return fibonacci;
}

function validateFibonacciInput(nthElement: number) {
  return nthElement>0;
}

function printFibonacciIterative(nthElement: number) {
  console.log("Fibonacci Iterative", nthElement+':', fibonacciIterative(nthElement));
}

function printFibonacciRecursive(nthElement: number) {
  if(!validateFibonacciInput(nthElement)) {
    console.log("Input", nthElement, "is invalid -_-'");
    return;
  }
  console.log("Fibonacci Recursive", nthElement+':', fibonacciRecursive(nthElement));
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  console.log('------------ Iterative ------------');
  printFibonacciIterative(0);
  printFibonacciIterative(1);
  printFibonacciIterative(2);
  printFibonacciIterative(3);
  printFibonacciIterative(4);
  printFibonacciIterative(5);
  printFibonacciIterative(6);
  printFibonacciIterative(9);
  printFibonacciIterative(42);
  printFibonacciIterative(50);
  printFibonacciIterative(100);
  console.log('\n------------ Recursive ------------');
  printFibonacciRecursive(-1);
  printFibonacciRecursive(0);
  printFibonacciRecursive(1);
  printFibonacciRecursive(2);
  printFibonacciRecursive(3);
  printFibonacciRecursive(4);
  printFibonacciRecursive(5);
  printFibonacciRecursive(7);
  printFibonacciRecursive(8);
  printFibonacciRecursive(42);  // Notice how much longer this takes than the iterative version
  
  // RUN:   deno run Algorithms/Recursion/Fibonacci.ts
}

// --------------------------- Terminal Output: ---------------------------
// ------------ Iterative ------------
// Fibonacci Iterative 0: undefined
// Fibonacci Iterative 1: 0
// Fibonacci Iterative 2: 1
// Fibonacci Iterative 3: 1
// Fibonacci Iterative 4: 2
// Fibonacci Iterative 5: 3
// Fibonacci Iterative 6: 5
// Fibonacci Iterative 9: 21
// Fibonacci Iterative 42: 165580141
// Fibonacci Iterative 50: 7778742049
// Fibonacci Iterative 100: 218922995834555200000

// ------------ Recursive ------------
// Input -1 is invalid -_-'
// Input 0 is invalid -_-'
// Fibonacci Recursive 1: 0
// Fibonacci Recursive 2: 1
// Fibonacci Recursive 3: 1
// Fibonacci Recursive 4: 2
// Fibonacci Recursive 5: 3
// Fibonacci Recursive 7: 8
// Fibonacci Recursive 8: 13
// Fibonacci Recursive 42: 165580141