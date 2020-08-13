// Examples of Quadratic Big O Runtime — O(n^2) ------------------

const boxes = ["a", "b", "c", "d", "e"];

function logAllPairs(array: Array<any>): void {
  for (let i = 0; i < array.length; i++) {        // O(n)
    for (let j = 0; j < array.length; j++) {        // O(n)
      console.log(array[i], array[j]);              // O(n)
    }
  }
}

function printNumbersThenPairSums(numbers: Array<number>): void {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {             // O(n)
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {        // O(n)
    numbers.forEach(function (secondNumber) {       // O(n)
      console.log(firstNumber + secondNumber);      // O(n)
    });
  });
}


logAllPairs(boxes); // O(n * 2n) ~ O(n^2)

printNumbersThenPairSums([1, 2, 3, 4, 5]);  // O(n + n*2n) ~ O(n^2)