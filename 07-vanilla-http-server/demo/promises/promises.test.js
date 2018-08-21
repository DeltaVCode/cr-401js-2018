'use strict';

const fs = require('fs');

describe('Promises', () => {
  describe('creating promises', () => {
    it('can create with constructor', done => {

      var promise = new Promise((resolveCallback, rejectCallback) => {
        var random = Math.random();
        var coinFlip = random > 0.5;
        if (coinFlip) {
          resolveCallback(random);
        } else {
          rejectCallback(random);
        }
      });

      promise
        .catch((reason) => {
          console.log('Reject!', reason);
          done();
        })
        .then((result) => {
          console.log('Resolve!', result);
          done();
        });
    });

    it('can create random timeout', done => {
      randomTimeout('testing')
        .then(result => {
          console.log(result);
          done();
        });
    });

    it('can race random timeouts', done => {
      Promise.race([
        randomTimeout('Turtle 1'),
        randomTimeout('Turtle 2'),
        randomTimeout('Turtle 3'),
        randomTimeout('Turtle 4'),
      ]).then(result => {
        console.log('winner!', result);
        done();
      });
    });

    it('can get all random timeouts', () => {
      // Instead of using done(),
      // returning a promise is waited/resolved correctly
      return Promise.all([
        randomTimeout('Turtle 1'),
        randomTimeout('Turtle 2'),
        randomTimeout('Turtle 3'),
        randomTimeout('Turtle 4'),
      ]).then(result => {
        console.log(result);
      });
    });

    // This will fail as expected if promise rejects
    it('can use static resolve', () => {
      return Promise.resolve(true)
        .then(result => {
          expect(result).toBe(true);
        });
    });

    // testing for Promise rejection is trickier
    it('can use static reject', () => {
      var rejectPromise = Promise.reject('oops');
      return expect(rejectPromise)
        .rejects.toBe('oops');
    });
  });

  describe('promisify', () => {
    // "Promisify" is the process of taking a callback
    // and turning into a Promise instead
    it('can promisify fs.readFile', () => {
      var readFilePromise = promisify(fs.readFile);

      return readFilePromise(`${__dirname}/package.json`)
        .then(buffer => {
          expect(buffer.toString()[0]).toBe('{');
        });
    });
  });
});

// After random time < 1s, resolve with value
function randomTimeout(value) {
  return new Promise( (resolveCallback, rejectCallback) => {
    var timeout = Math.random() * 1000;
    setTimeout(() => {
      resolveCallback({ value, timeout });
    }, timeout);
  });
}

function promisify(functionToPromisify) {
  return (...args) =>
    new Promise((resolveCallback, rejectCallback) => {
      // readFile(path, (err, result) => ...)
      functionToPromisify(...args, (err, result) => {
        if (err) {
          rejectCallback(err);
        }
        else {
          resolveCallback(result);
        }
      });
    });
}
