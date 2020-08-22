/**
 * Given an array, swaps two elements at the specified positions (indices).
 * @param array Array in which to swap elements between two positions
 * @param pos1 Index of first element's position
 * @param pos2 Index of second element's position
 */
function swap(array: Array<any>, pos1: number, pos2: number) {
  let temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}


function partition(array: Array<any>, pivotIndex: number, leftBound: number, rightBound: number){
  let pivot = array[pivotIndex];
  let partitionIndex = leftBound;

  for (let i = leftBound; i < rightBound; ++i) {
    if (array[i] < pivot) {
      swap(array, i, partitionIndex);
      ++partitionIndex;
    }
  }
  swap(array, rightBound, partitionIndex);
  return partitionIndex;
}

/**
 * Sort an array of numbers or strings using Quick Sort
 * @param array Complete array to be sorted
 * @param leftBound Index of left-most element for section to be sorted
 * @param rightBound Index of right-most element for section to be sorted
 * @returns Returns sorted array
 */
function quickSort(array: number[] | string[], leftBound: number, rightBound: number): Array<any> {

  let pivotIndex: number;
  let partitionIndex: number;

  if (leftBound < rightBound) {
    pivotIndex = rightBound;
    partitionIndex = partition(array, pivotIndex, leftBound, rightBound);
    
    // Sort left & right sub-sections
    quickSort(array, leftBound, partitionIndex-1);
    quickSort(array, partitionIndex+1, rightBound);
  }
  return array;
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {
  const numbers1 = [9, 6, 5, 3, 1, 8, 7, 2, 4];
  const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const colors = ["white", "black", "green", "blue", "orange"];

  console.log(quickSort(numbers1, 0, numbers1.length-1));
  console.log(quickSort(numbers2, 0, numbers2.length-1));
  console.log(quickSort(colors, 0, colors.length-1));

  // RUN:   deno run Algorithms/Sorting/QuickSort.ts
}

// --------------------------- Terminal Output: ---------------------------
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
// [
//   0, 1, 2, 4,  5,
//   6, 44, 63, 87, 99,
//   283
// ]
// [ "black", "blue", "green", "orange", "white" ]