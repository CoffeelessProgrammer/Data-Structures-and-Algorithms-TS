// Exercise 1 -----------------------------------------

function anotherFunction() {
  // unknown runtime
}

function funChallenge(input: Array<any>): number {
  let a = 10;   // O(1)
  a = 50 + 3;   // O(1)

  for (let i = 0; i < input.length; i++) {    // O(n)
    anotherFunction();      // O(n)
    let stranger = true;    // O(n)
    a++;                    // O(n)
  }

  return a;     // O(1)
}



const numbersArr = [1,2,3,4,5];

funChallenge(numbersArr);   // Time Complexity: O(3 + 4n) ~ O(n)