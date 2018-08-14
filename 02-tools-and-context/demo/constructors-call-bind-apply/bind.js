'use strict';

function hometown(city, state) {
  console.log(`${this.name} is from ${city}, ${state}`);
}

// Doesn't work because it has no this:
// hometown('Ames', 'IA');

var p1 = { name: 'Keith3', hometown };
p1.hometown('Ames', 'IA');

var p2 = { name: 'Keith2' };
p2.hometown = hometown;
p2.hometown('Ames', 'IA');

hometown.call({ name: 'Keith call' }, 'Ames', 'IA');
hometown.apply({ name: 'Keith apply' }, ['Ames', 'IA']);

var p3 = { name: 'Keith3' };
var p3hometown = hometown.bind(p3);
console.log(hometown);
console.log(p3hometown);

p3hometown('Ames', 'IA');
