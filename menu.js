const move = require('./move');
let player = move.player;
let readlineSync = require('readline-sync');
const fs = require('fs');
const gameOver = require('./gameover');
let ctx = require('axel');
let keypress = require('keypress');

const logo = () => {
  let logotomb = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0]];
  printlogo(logotomb);
  console.log();
};

const printlogo = (arr) => {
  let ctx = require('axel');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        ctx.bg(0, 0, 0);
        ctx.fg(255, 255, 51);
        ctx.text(j + 2, i + 2, '█');
      } else {
        ctx.bg(0, 0, 0);
      }
    }
  }
};

const pointIn = (player) => {
  // player.name = readlineSync.question('\n\n May I have your name pls? \n\n');
  fs.appendFileSync('pontok.txt', ' \n' + player.name + '        ' + player.score, function (err) {
    if (err) throw err;
  });
};

const addtofile = (player, game) => {
  let menuPoints = ['new game', 'scoreboard'];
  let index = (readlineSync.keyInSelect(menuPoints)) + 1;
  console.clear();
  switch (index) {
    case 1:
      let run = setInterval(function () {
        game(player);
        if (player.life === 2) {
          clearInterval(run);
          ctx.clear();
          gameOver.print2dGameover(gameOver.arr1);
          pointIn(player);
          let data = fs.readFileSync('pontok.txt');
          console.log(data.toString());
        }
      }, 1000);

      break;
    case 2:
      let data = fs.readFileSync('pontok.txt');
      console.log(data.toString());
      console.log('press \'q\' to menu');
      let back = readlineSync.keyIn();
      if (back === 'q') {
        console.clear();
        logo();
        addtofile(player, game);
      }
      break;
    case 0:process.exit();
  }
};

module.exports = { addtofile, logo, printlogo, pointIn };
