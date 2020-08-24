// ----------------------- Class Implementation -----------------------
class MemoizationExample {
  private static cache = Object.create({});

  public static resetCache() {
    this.cache = null;
    this.cache = Object.create({});
  }

  public static memoizedAddTo42(n: number, visualize?: boolean): number {
    if (n in this.cache) {
      if (visualize) console.log('Found!', n, '+ 42 =', this.cache[n]);
      return this.cache[n];
    } else {
      if (visualize) console.log('New encounter!', n);
      this.cache[n] = n + 42;
      return this.cache[n]
    }
  }

  public static addTo42(n: number): number {
    console.log('Long time!', n);
    return n + 42;
  }
}

// ----------------------- Closure Implementation -----------------------
function memoizedAddTo64() {
  let cache = Object.create({});

  return function(n: number): number {
    if (n in cache) {
      console.log('Found!', n, '+ 64 =', cache[n]);
      return cache[n];
    } else {
      console.log('New encounter!', n);
      cache[n] = n + 64;
      return cache[n]
    }
  }
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  console.log('------------ Memoization via Class ------------');
  MemoizationExample.memoizedAddTo42(17, true);
  MemoizationExample.memoizedAddTo42(15, true);
  MemoizationExample.memoizedAddTo42(17, true);
  MemoizationExample.memoizedAddTo42(28, true);
  MemoizationExample.memoizedAddTo42(28, true);

  console.log('\n----------- Memoization via Closure -----------');
  const memoized = memoizedAddTo64();

  memoized(7);
  memoized(5);
  memoized(5);

  // RUN:   deno run Algorithms/DynamicProgramming/Basics.ts
}

// --------------------------- Terminal Output: ---------------------------
// ------------ Memoization via Class ------------
// New encounter! 17
// New encounter! 15
// Found! 17 + 42 = 59
// New encounter! 28
// Found! 28 + 42 = 70

// ----------- Memoization via Closure -----------
// New encounter! 7
// New encounter! 5
// Found! 5 + 64 = 69