// ---------------- Fibonacci Sequence ----------------
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

class FibonacciMemoized {
  private static cache = Object.create({});

  private static _initialize = (() => {
    FibonacciMemoized.cache[1] = 0;
    FibonacciMemoized.cache[2] = 1;
  })();

  public static nthTerm(nth: number): number {
    if (nth in this.cache)
      return this.cache[nth];
    else
      this.cache[nth] = this.nthTerm(nth-2) + this.nthTerm(nth-1);
    
    return this.cache[nth];
  }
}

function fibonacciBottomUp() {
  let fibonacciSequence: number[] = [0,1];

  return function(nth: number): number | undefined {
    if (nth < 1) return undefined;
    else nth = Math.floor(nth);
  
    for (let i=fibonacciSequence.length; i <= nth; ++i)
      fibonacciSequence.push(fibonacciSequence[i-2]+ fibonacciSequence[i-1]);
    
    return fibonacciSequence[nth-1];
  }
}

function executionTime(n: number): string {
  const t0 = performance.now();
  console.log('Term', n+':', FibonacciMemoized.nthTerm(n));
  const t1 = performance.now();
  return (t1-t0) + 'ms';
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  console.log('\n------------ Memoization ------------');
  const a1 = Object.create({});
  a1.run_1 = executionTime(256);
  a1.run_2 = executionTime(256);
  a1.run_3 = executionTime(16);
  a1.run_4 = executionTime(8);

  console.table(a1);

  console.log('\n------------ Bottom Up ------------');
  const fibBot = fibonacciBottomUp();

  console.log('Term 1:', fibBot(1));
  console.log('Term 6:', fibBot(6));
  console.log('Term 11:', fibBot(11));
  console.log('Term 42:', fibBot(42));

  // RUN:   deno run Algorithms/DynamicProgramming/Fibonacci.ts
}

// --------------------------- Terminal Output: ---------------------------
//
// ------------ Memoization ------------
// Term 256: 8.757159534301882e+52
// Term 256: 8.757159534301882e+52
// Term 16: 610
// Term 8: 13
// ┌───────┬────────┐
// │ (idx) │ Values │
// ├───────┼────────┤
// │ run_1 │ "2ms"  │
// │ run_2 │ "8ms"  │
// │ run_3 │ "2ms"  │
// │ run_4 │ "12ms" │
// └───────┴────────┘
//
// ------------ Bottom Up ------------
// Term 1: 0
// Term 6: 5
// Term 11: 55
// Term 42: 165580141