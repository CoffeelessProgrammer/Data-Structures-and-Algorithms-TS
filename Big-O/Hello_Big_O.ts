
const nemo = ['nemo'];
const fishColony = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const largeArr = new Array(10_000_000).fill('squish');

function findNemo(fishes: Array<string>): string {
  let t0 = performance.now();   // O(1)

  let isNemoFound = false;      // O(1)

  for (let i = 0; i < fishes.length; i++) {   // O(n)
    if (fishes[i] === 'nemo') {   // O(n)
      isNemoFound = true;         // O(n)
      break;                      // O(1)
    }
  }

  let t1 = performance.now();     // O(1)
  console.log("Call to find Nemo took " + (t1 - t0) + "ms.");   // O(1)

  return isNemoFound ? "Found NEMO!" : "Where did Nemo go?!";   // O(1)
}

function getFirstFish(fishes: Array<string>) {
    return fishes[0].charAt(0).toUpperCase() + fishes[0].substring(1).toLowerCase();  // O(1)
}



console.log(findNemo(fishColony));  // Time Complexity: O(n)
console.log(findNemo(largeArr));    // Time Complexity: O(n)
console.log(getFirstFish(fishColony), "just keeps swimming!");  // Time Complexity: O(1)