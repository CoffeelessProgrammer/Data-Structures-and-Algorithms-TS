// RUN:   deno run Data-Structures/Arrays/Basics.ts


const teamAvatar = ['Aang','Appa','Momo','Katara','Sokka'];

// Push adds an element to the end of the array
teamAvatar.push('Yue'); // O(1)

// Pop removes and returns the last element
console.log(teamAvatar.pop(), 'turned into the moon!!!'); // O(1)
console.log(teamAvatar.pop(), "is in disbelief...");  // O(1)

console.log(teamAvatar);

console.log('Team Avatar is', teamAvatar.push('Sokka'), 'strong.');

// Unshift adds the specified elements to the beginning of the array
teamAvatar.unshift('Toph'); // O(n)

console.log('Toph joins the team!');

// Splice(i, n) removes n elements starting from index i
teamAvatar.splice(2, 1);  // O(n)

console.log('Appa was captured?!?!', teamAvatar);

// Splice(i, 0, [elements]) inserts [elements] at index i
teamAvatar.splice(2, 0, 'Appa');  // O(n)

console.log('Zuko saved Appa!!!', teamAvatar);