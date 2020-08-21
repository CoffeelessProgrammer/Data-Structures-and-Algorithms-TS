function findNumOccurrences(color: string, colorsArr: string[]): number {
  let occurrences = 0;

  for (let c of colorsArr) {
    if (color === c) ++occurrences;
  }

  return occurrences;
}

console.log(findNumOccurrences("black", ["white", "red", "black", "green", "black", "red"]));

function unique(array: Array<number> | Array<string>): boolean {
  const found = new Set();
  for (let element of array) {
    if (found.has(element)) return false;
    else found.add(element);
  }
  return true;
}

console.log(unique([1,4,6,8,2]));
console.log(unique([1,4,6,8,4,2]));

// RUN: deno run Playground/Interviews/HealthcareHM.ts