/*  fs.readFile('pontok.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
  }); */
/* var fs = require('fs');

  fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  }); */

let readlineSync = require('readline-sync');
let playername = readlineSync.question('May I have your name pls?');
let menuPoints = ['new game', 'scoreboard', 'exit'];
let index = (readlineSync.keyInSelect(menuPoints)) + 1;
const fs = require('fs');

const addtofile = (point) => {
  fs.appendFile('pontok.txt', ' \n' + playername + '        ' + point, function (err) {
    if (err) throw err;
  });
};

addtofile();

switch (index) {
  case 1:
    break;
  case 2:fs.readFile('pontok.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
    break;
  case 3:process.exit();
}
module.exports {addtofile}