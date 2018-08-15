'use strict';

const fs = require('fs');
const path = require('path');

// Totally fine to be lazy instead of using path.join()
//const file = `${__dirname}/data.txt`;
const file = path.join(__dirname, 'data.txt');
const bigfile = path.join(__dirname, 'bigdata.txt');
console.log(file);

// Sync can crush your server with waiting
let syncData = fs.readFileSync(file);
console.log('sync', syncData.toString());

// Use async instead!
fs.readFile(bigfile, (err, buffer) => {
  if (err) throw err;

  console.trace()
  console.log('async (big)', buffer.toString('utf8', 0, 10));
});

// Callback don't have to be anonymous...makes debugging harder!
function afterLoadData(err, data) {
  if (err) throw err;

  console.log('afterLoad', data.toString());
}
fs.readFile(file, afterLoadData);

console.log('async reads done');

fs.readFile(bigfile, function loadBigData(err, data) {
  if (err) throw err;
  console.trace()
  console.log('bigfile 2', data.toString('utf8',0,4));
})