var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');           // Index: 1

beasts.findIndex(function(item){      // Index: 1
  return item === 'Godzilla';
});

beasts.find(function(item){           // 'Godzilla'
  return item === 'Godzilla';
});

beasts.includes('Godzilla');          //  true