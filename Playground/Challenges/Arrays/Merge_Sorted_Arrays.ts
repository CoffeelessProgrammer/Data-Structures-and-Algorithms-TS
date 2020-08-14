// Challenge: Given two sorted numerical arrays,
//    merge them into a sorted array
//
// Example:
//    Input:  [1,3,8,9] and [2,5,7]
//    Output: [1,2,3,5,7,8,9]


function mergeSortedArrays(arr1: number[], arr2: number[]): Array<number> {   // Time Complexity: O(a+b)
  const largeSorted: number[] = [];


  for(let i=0,j=0; i <= arr1.length && j <= arr2.length;) {

    if (i === arr1.length && j === arr2.length) {
      break;
    }

    if (i === arr1.length) {
      largeSorted.push(arr2[j]);
      ++j;
      continue;
    }

    if (j === arr2.length) {
      largeSorted.push(arr1[i]);
      ++i;
      continue;
    }

    if (arr1[i] < arr2[j]) {
      largeSorted.push(arr1[i]);
      ++i;
    } else {
      largeSorted.push(arr2[j])
      ++j;
    }
  }

  return largeSorted;
}


const arr1 = [1,3,8,9];
const arr2 = [2,5,7];

console.log(mergeSortedArrays(arr1, arr2));               // O(a+b)
console.log(mergeSortedArrays([4,6,30], [0,3,4,31]));     // O(a+b)
console.log(mergeSortedArrays([2,4,8,16,32], []));        // O(a+b)
console.log(mergeSortedArrays([], []));                   // O(a+b)