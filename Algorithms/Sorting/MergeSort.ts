function merge(left: any[], right: any[]): Array<any> {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (
    leftIndex < left.length &&
    rightIndex < right.length
  ) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      ++leftIndex;
    } else {
      result.push(right[rightIndex]);
      ++rightIndex;
    }
  }
  // console.log('Result:', result);
  // console.log('\tLeft:', left.slice(leftIndex));
  // console.log('\tRight:', right.slice(rightIndex));
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));  // Add remaining elements on either side
}

function mergeSort(inputArr: string[] | number[]): Array<any> {
  if (inputArr.length === 1) return inputArr;     // Base Case

  // Split Array in into right and left
  const middleIndex = Math.floor(inputArr.length / 2);
  const left = inputArr.slice(0, middleIndex);
  const right = inputArr.slice(middleIndex);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}

//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {
  const numbers1 = [9, 6, 5, 3, 1, 8, 7, 2, 4];
  const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const colors = ["white", "black", "green", "blue", "orange"];

  console.log(mergeSort(numbers1));
  console.log(mergeSort(numbers2));
  console.log(mergeSort(colors));

  // RUN:   deno run Algorithms/Sorting/MergeSort.ts
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