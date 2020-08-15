// ---------- Google Interview Question ----------
// Given an array = [2,5,1,2,3,5,1,2,4]:
//   It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
//   It should return 1

// Given an array = [2,3,4,5]:
//   It should return undefined

// Bonus... What if we had this:
//   [2,5,5,2,3,5,1,2,4]
// Return 5 because the pairs are before 2,2


//  Solution by CoffeelessProgrammer ---------------------------------------

/**
 * Finds the first recurring element of a numerical array.
 * @param {Array<number>} numArray
 * @returns {number | undefined} First repeated number, or undefined if none
 */
export function firstRecurringNumber(numArray: number[]): number | undefined {
  let seen = new Set<number>();

  for (let i=0; i < numArray.length; ++i) {
    if (seen.has(numArray[i])) {
      return numArray[i];
    }
    seen.add(numArray[i]);
  }

  return undefined;
}

/**
 * Finds the first recurring element of a numerical or string array.
 * @param {Array<number> | Array<string>} arr
 * @returns {number | string | undefined} First repeated symbol, or undefined if none
 */
export function findFirstRecurring(arr: number[] | string[]): number | string | undefined {
  let seen = new Set();

  for (let i=0; i < arr.length; ++i) {
    if (seen.has(arr[i])) {
      return arr[i];
    }
    seen.add(arr[i]);
  }

  return undefined;
}