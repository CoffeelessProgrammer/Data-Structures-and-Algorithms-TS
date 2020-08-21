const spanish = ['único', 'árbol', 'cosas', 'fútbol'];

spanish.sort(function(a,b) {
  return a.localeCompare(b, 'es');
});

console.log(spanish);

// OUTPUT: [ "cosas", "fútbol", "árbol", "único" ]

// RUN: deno run Algorithms/Sorting/Basics.ts