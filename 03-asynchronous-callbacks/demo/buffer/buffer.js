'use strict';

let data = new Buffer('Bold!');
console.log(data);

console.log(data.toString());
console.log(data.toString('hex'));

console.log(data[0]);
console.log(data[0].toString(16));

data[0] += 5; // B to G
console.log(data.toString());

data[0] += 0x20; // to lowercase`
console.log(data.toString());
