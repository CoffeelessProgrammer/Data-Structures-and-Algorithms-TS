// Challenge: Given an array of unordered numbers and a sum,
//   is there a pair of numbers which add up to the sum?


// Naive (Brute Force) Solution
function hasPairWithSumBF(arr: number[], sum: number): boolean {

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }

  return false;
}

// Efficient Solution
function hasPairWithSum(arr: number[], sum: number) {
  const mySet = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }

  return false;
}

console.log(hasPairWithSumBF([6, 4, 3, 2, 1, 7], 9));   // O(n^2)
console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));     // O(n)
console.log(hasPairWithSum([1,2,3,9], 8));              // O(n)