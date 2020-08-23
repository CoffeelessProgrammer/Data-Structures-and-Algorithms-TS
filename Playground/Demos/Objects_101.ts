// RUN: deno run Playground/Demos/Objects_101.ts

console.log('------------------------- Episode 1 -------------------------');
const episode1 = {
  name: 'The Boy in the Iceberg',
  location: ['Shipwreck', 'Southern Water Tribe', "Zuko's Ship"],
  characters: ['Aang', 'Appa', 'Katara', 'Sokka', 'Iroh', 'Zuko'],
  introduction: function() {
    return "Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony.";
  }
};

console.log(episode1);



console.log('------------------------- Episode 2 -------------------------');
const episode2 = Object.create(episode1);

console.log(episode2);                                      // While fields don't show on console,
console.log(episode2.name, '—', episode2['characters']);    // they are still populated by passed in prototype.
console.log(episode2.introduction());                       // Function also exists because episode1 used as prototype.

episode2.name = 'The Avatar Returns';
episode2['location'] = ['Southern Water Tribe', "Zuko's Ship"];  // Recommended assignment syntax
episode2['characters'] = ['Aang', 'Appa', 'Katara', 'Sokka', 'Iroh', 'Zuko'];

console.log(episode2);



console.log('------------------------- Episode 3 -------------------------');
const episode3 = Object.create({});

// console.log(episode3.introduction());  // Does not exist because didn't use episode1 prototype

episode3.name = 'The Southern Air Temple';
episode3['location'] = ['Earth Kingdom Harbor', 'Southern Air Temple'];  // Recommended syntax
episode3[1] = 'The Air Temple is one of the most beautiful places in the world!';   // Can also use syntax for numerical index in object

console.log(episode3);