function bubbleSort(numbersArr: Array<number>) {

  for (let i=0; i < numbersArr.length-1; ++i) {
    for (let j=0; j < numbersArr.length-1-i; ++j) {
      if (numbersArr[j] > numbersArr[j+1]) {
        numbersArr[j+1] = numbersArr[j]   + numbersArr[j+1];
        numbersArr[j]   = numbersArr[j+1] - numbersArr[j];
        numbersArr[j+1] = numbersArr[j+1] - numbersArr[j];
      }
    }
  }
  return numbersArr;
}

function bubbleSortStrings(stringArr: Array<string>) {

  let placeholder: string;

  for (let i=0; i < stringArr.length-1; ++i) {
    for (let j=0; j < stringArr.length-1-i; ++j) {
      if (stringArr[j] > stringArr[j+1]) {
        placeholder     = stringArr[j];
        stringArr[j]    = stringArr[j+1];
        stringArr[j+1]  = placeholder;
      }
    }
  }
  return stringArr;
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const numbers1  = [9,6,5,3,1,8,7,2,4];
  const numbers2  = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const colors    = ["white", "black", "green", "blue", "orange"];

  console.log(bubbleSort(numbers1));
  console.log(bubbleSort(numbers2));
  console.log(bubbleSortStrings(colors));

  // RUN:   deno run Algorithms/Sorting/BubbleSort.ts
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