// Given 2 arrays, create a function that let's a user 
// know (true/false) whether these two arrays contain any common items
// 
// For Example:
//   const array1 = ['a', 'b', 'c', 'x'];
//   const array2 = ['z', 'y', 'i'];
// Should return false.
// -----------
//   const array1 = ['a', 'b', 'c', 'x'];
//   const array2 = ['z', 'y', 'x'];
// Should return true.

// Arrays have no size limit
// Return true or false

// Naive (Brute Force) Solution
function containsCommonItemBF(arr1: Array<string>, arr2: Array<string>): boolean {
  for (let i=0; i < arr1.length; i++) {     // O(a)
    for (let j=0; j < arr2.length; j++) {     // O(b)
      if(arr1[i] === arr2[j])                 // O(1)
        return true;
    }
  }

  return false;
}

// Time Efficient Solution
export function containsCommonItem(arr1: Array<string>, arr2: Array<string>): boolean {
  // Iterate through first array and record seen items
  let map = Object.create({});

  for (let i=0; i < arr1.length; i++) {     // O(a)
    const currentItem = arr1[i];

    if (!map[currentItem]) {
      map[currentItem] = true;
    }
  }

  // Iterate through second array and check the record
  for (let i=0; i < arr2.length; i++) {     // O(b)
    if (map[arr2[i]]) return true;
  }

  return false;
}

// Works the same as time efficient solution
export function containsCommonItemSyntacticSugar(arr1: Array<string>, arr2: Array<string>): boolean {
  return arr1.some(item => arr2.includes(item));
}



if (import.meta.main) {
  const array1 = ['a', 'b', 'c', 'x'];
  const array2 = ['z', 'y', 'x'];
  const array3 = ['z', 'y', 'i'];

  console.log(containsCommonItemBF(array1, array2));  // O(a*b)
  console.log(containsCommonItemBF(array1, array3));  // O(a*b)

  console.log(containsCommonItem(array1, array2));    // O(a+b)
  console.log(containsCommonItem(array1, array3));    // O(a+b)
}