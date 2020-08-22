function swap(pos1: number, pos2: number, inputArr: Array<any>): void {
  const placeholder = inputArr[pos1];
  inputArr[pos1] = inputArr[pos2];
  inputArr[pos2] = placeholder;
}

function selectionSort(inputArr: Array<number> | Array<string>): Array<any> {

  let minValue: number | string;
  let minIndex: number;

  for (let i=0; i < inputArr.length-1; ++i) {
    minValue = inputArr[i];
    minIndex = i;
    for (let j=i+1; j <= inputArr.length-1; ++j) {
      if (inputArr[j] < minValue) {
        minValue = inputArr[j];
        minIndex = j;
      }
    }
    swap(i, minIndex, inputArr);
  }
  
  return inputArr;
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const numbers1  = [9,6,5,3,1,8,7,2,4];
  const numbers2  = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const colors    = ["white", "black", "green", "blue", "orange"];

  console.log(selectionSort(numbers1));
  console.log(selectionSort(numbers2));
  console.log(selectionSort(colors));

  // RUN:   deno run Algorithms/Sorting/SelectionSort.ts
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