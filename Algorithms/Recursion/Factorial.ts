function calcFactorialRecursive(input: number): number {
  if (input <= 1) return 1;

  return input * calcFactorialRecursive(input-1);
}

function calcFactorialIterative(input: number): number | undefined {
  if (input < 0) return undefined;

  let factorial = 1;

  for (let i=2; i <= input; ++i) {
    factorial *= i;
  }

  return factorial;
}

function validateFactorialInput(input: number): boolean {
  return input>=0;
}

function printIterativeFactorial(input: number) {
  if (!validateFactorialInput(input)) {
    console.log("Input", input, "is invalid -_-'");
    return;
  }
  console.log('Iterative Factorial', input+':', calcFactorialIterative(input));
}

function printRecursiveFactorial(input: number) {
  if (!validateFactorialInput(input)) {
    console.log("Input", input, "is invalid -_-'");
    return;
  }
  console.log('Recursive Factorial', input+':', calcFactorialRecursive(input));
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  printIterativeFactorial(0);
  printIterativeFactorial(1);
  printIterativeFactorial(2);
  printIterativeFactorial(3);
  printIterativeFactorial(5);
  printRecursiveFactorial(4);
  printRecursiveFactorial(0);
  printRecursiveFactorial(-1);
  printRecursiveFactorial(170);
  printIterativeFactorial(171);

  // RUN:   deno run Algorithms/Recursion/Factorial.ts
}

// --------------------------- Terminal Output: ---------------------------
// Iterative Factorial 0: 1
// Iterative Factorial 1: 1
// Iterative Factorial 2: 2
// Iterative Factorial 3: 6
// Iterative Factorial 5: 120
// Recursive Factorial 4: 24
// Recursive Factorial 0: 1
// Input -1 is invalid -_-'
// Recursive Factorial 170: 7.257415615307994e+306
// Iterative Factorial 171: Infinity