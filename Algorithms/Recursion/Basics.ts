function inception(repeat: number): string {
  // 1. Base Case(s)
  if (repeat === 0) return 'Done!\n';         // Base Case(s) must be written first in method
  // 2?. Input Validation
  if (repeat < 1) return 'Too small!\n';      // Input validation should occur after base case(s)

  console.log('Counter:', repeat);

  // 3. Recursive Call
  return inception(repeat-1);                 // The recursive call should return itself so the calculated value can bubble up
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  console.log(inception(5));
  console.log(inception(1));
  console.log(inception(-1));

  // RUN:   deno run Algorithms/Recursion/Basics.ts
}

// --------------------------- Terminal Output: ---------------------------
// Counter: 5
// Counter: 4
// Counter: 3
// Counter: 2
// Counter: 1
// Done!
//
// Counter: 1
// Done!
//
// Too small!