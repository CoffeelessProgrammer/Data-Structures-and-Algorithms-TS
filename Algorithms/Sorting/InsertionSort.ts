import { plant_families } from './Data/PlantFamilies.ts';

function insertionSort(inputArr: number[] | string[]) {

  if (typeof inputArr[0] === 'number') {
    for (let i=0; i < inputArr.length; ++i) {
      if (inputArr[i] < inputArr[0]) {
        const element = inputArr.splice(i,1) as number[];
        //  Move element to the first position
        (inputArr as number[]).unshift(element[0]);
      }
      else {
        // Only sort number smaller than preceding number
        if (inputArr[i] < inputArr[i-1]) {
          //  Find where element's sorted position
          for (var j = 1; j < i; j++) {
            if (inputArr[i] >= inputArr[j-1] && inputArr[i] < inputArr[j]) {
              // Move element to the sorted spot
              inputArr.splice(j,0,inputArr.splice(i,1)[0] as number);
            }
          }
        }
      }
    }
  }
  else if (typeof inputArr[0] === 'string') {
    for (let i=0; i < inputArr.length; ++i) {
      if (inputArr[i] < inputArr[0]) {
        const element = inputArr.splice(i,1) as string[];
        //  Move element to the first position
        (inputArr as string[]).unshift(element[0]);
      }
      else {
        // Only sort number smaller than preceding number
        if (inputArr[i] < inputArr[i-1]) {
          //  Find where element's sorted position
          for (var j = 1; j < i; j++) {
            if (inputArr[i] >= inputArr[j-1] && inputArr[i] < inputArr[j]) {
              // Move element to the sorted spot
              inputArr.splice(j,0,inputArr.splice(i,1)[0] as string);
            }
          }
        }
      }
    }
  }

  return inputArr;
}

function executionTime(method: any): string {
  const t0 = performance.now();
  method(plant_families.medium_list);
  const t1 = performance.now();
  return (t1-t0) + 'ms';
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const numbers1  = [9,6,5,3,1,8,7,2,4];
  const numbers2  = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const colors    = ["white", "black", "green", "blue", "orange"];

  console.log('\n------------------ Insertion Sort ------------------');
  console.log(insertionSort(numbers1));
  console.log(insertionSort(numbers2));
  console.log(insertionSort(colors));

  console.log('\n---------------- Algorithm Benchmarks ----------------');

  const a1 = Object.create({});
  a1.run_1 = executionTime(insertionSort);
  a1.run_2 = executionTime(insertionSort);
  a1.run_3 = executionTime(insertionSort);

  // const a2 = Object.create({});
  // a2.run_1 = executionTime(insertionSortModified);
  // a2.run_2 = executionTime(insertionSortModified);
  // a2.run_3 = executionTime(insertionSortModified);

  console.table([a1]);

  // RUN:   deno run Algorithms/Sorting/InsertionSort.ts
}

// --------------------------- Terminal Output: ---------------------------
//
// ------------------ Insertion Sort ------------------
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
//
// ------------- Modified Insertion Sort  --------------
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
//
// ---------------- Algorithm Benchmarks ----------------
// ┌───────┬────────┬────────┬───────┐
// │ (idx) │ run_1  │ run_2  │ run_3 │
// ├───────┼────────┼────────┼───────┤
// │   0   │ "32ms" │ "34ms" │ "2ms" │
// │   1   │ "10ms" │ "12ms" │ "4ms" │
// └───────┴────────┴────────┴───────┘