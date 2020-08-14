// Challenge: Reverse the characters of a string, preserving
//    capitalization and spaces
//
// Example:
//    Input — "Avatar the Last Airbender"
//    Output — "rednebriA tsaL eht ratavA"

function reverseString(input: string): string {
  let reversed: string[] = [];

  if (input.length > 1) {
    for (let i = input.length; i > 0; --i) {
      reversed.push(input.charAt(i-1));   // input[i-1] will also work in JS
    }
  }

  return reversed.join('');
}

function reverseWithJavascriptVoodoo(input: string): string {
  return input.split('').reverse().join('');
}

const reverseWithMoreVoodoo = (str: string) => [...str].reverse().join('');



console.log(reverseString("ATLA"));
console.log(reverseString("Avatar the Last Airbender"));