function reverseStringRecursive(str: string): string {
  if (str.length===0) return "";

  return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

function printReverseString(str: string) {
  console.log(str, '–>', reverseStringRecursive(str));
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  printReverseString("Hello World!");
  printReverseString("C0mp!ex1tY");
  printReverseString("Avatar: The Last Airbender");

  // RUN: deno run Playground/Challenges/Recursion/ReverseString.ts
}