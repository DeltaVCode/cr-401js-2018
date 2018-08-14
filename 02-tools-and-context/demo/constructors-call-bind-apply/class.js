'use strict';

class Person {
  constructor(name) {
    if (!name) throw new Error("name is required");
    if (!this) throw new Error("this not set! Use Person with new!")

    this.name = name;
    return this;
  }

  sayHello() {
    console.log(`${this.name} says hi via class`);
  }
}

module.exports = Person;

var person1 = new Person('Keith');
console.log('person1', person1);
person1.sayHello();

// Cannot call or apply a class constructor

class Programmer extends Person {
  constructor(name, language) {
    super(name);

    this.language = language;
  }

  code() {
    console.log(`Writing some ${this.language}`);
  }
}

var jess = new Programmer('Jess', 'PowerShell');
console.log(jess);
jess.code();
// inherited from Person prototype
jess.sayHello();
