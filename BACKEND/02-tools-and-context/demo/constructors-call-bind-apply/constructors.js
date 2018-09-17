'use strict';

var empty = {};
var empty2 = new Object();

function Person(name) {
  if (!name) throw new Error("name is required");
  if (!this) throw new Error("this not set! Use Person with new!")

  this.name = name;
  return this;
}
Person.prototype.sayHello = function() {
  console.log(`${this.name} says hi via prototype`);
};

module.exports = Person;

var person1 = new Person('Keith');
console.log('person1', person1);
person1.sayHello();

// Calling Person directly has no 'this' because of 'use strict'
// Without 'use strict', 'this' is the global object
try {
  var person2 = Person('Keith2'); // this not set!
} catch (e) {
  console.log('person2', e.message);
}

// Call Person as a function with a new object as its 'this'
var person3 = Person.call({}, 'Keith3');
console.log(person3);

// Apply is like Call but with an array instead of a parameter list
var person4 = Person.apply({}, ['Keith4']);
console.log(person4);

// Inheritance
function Programmer(name, language) {
  Person.call(this, name);

  this.language = language;
}
// This is a hack, the right way is weird so 
// Keith doesn't remember how to do it right
Programmer.prototype = new Person('ignore me');
Programmer.prototype.code = function() {
  console.log(`Writing some ${this.language}`);
}

var jess = new Programmer('Jess', 'PowerShell');
console.log(jess);
jess.code();
// inherited from Person prototype
jess.sayHello();
