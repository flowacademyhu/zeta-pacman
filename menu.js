const move = require('./move');
let player = move.player;
let { arr, print2d, arrOrigin } = require('./pacmap');
const again = require('./again');
let readlineSync = require('readline-sync');
const fs = require('fs');
const gameOver = require('./gameover');
let ctx = require('axel');
const table = require('table');

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
  fs.appendFileSync('pontok.txt', ' \n' + player.name + '       ' + player.score, function (err) {
    if (err) throw err;
  });
};

function sortFunction (a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return (a[1] > b[1]) ? -1 : 1;
  }
}

const drawScore = () => {
  ctx.bg(0, 0, 0);
  ctx.clear();
  gameOver.print2dGameover(gameOver.arr1);
  pointIn(player);
  let data = fs.readFileSync('pontok.txt');
  let dataString = data.toString();
  let dataSplit = dataString.split(/[\s]/);
  for (let i = 0; i < dataSplit.length; i++) {
    if (dataSplit[i] === '') {
      dataSplit.splice(i, 1);
      i--;
    }
  }

  let tomb = [];
  for (let i = 0; i < dataSplit.length; i++) {
    if (i % 2 === 0) {
      tomb.push([dataSplit[i], Number(dataSplit[i + 1])]);
    }
  }

  let tombSort = tomb.sort(sortFunction);

  console.log(table.table(tombSort));
};

const menu = (player, game, ghost01, ghost02, ghost03, ghost04, pacman) => {
  let menuPoints = ['new game', 'scoreboard'];
  let index = (readlineSync.keyInSelect(menuPoints)) + 1;
  console.clear();
  switch (index) {
    case 1:
      let run = setInterval(function () {
        game(player, arr);
        if (player.life === 0) {
          clearInterval(run);
          drawScore();
        } else {
          if (player.koszt === 140) {
            console.log('itt vagyok');
            again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
            arr = [
              [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5],
              [5, 7, 5, 5, 3, 5, 5, 5, 3, 5, 3, 5, 5, 5, 3, 5, 5, 7, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
              [5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
              [5, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5], [5, 5, 5, 5, 3, 5, 3, 5, 8, 0, 8, 5, 3, 5, 3, 5, 5, 5, 5],
              [3, 3, 3, 3, 3, 3, 3, 5, 0, 0, 0, 5, 3, 3, 3, 3, 3, 3, 3], [5, 5, 5, 5, 3, 5, 3, 5, 8, 0, 8, 5, 3, 5, 3, 5, 5, 5, 5],
              [5, 5, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5, 5, 5],
              [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5],
              [5, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 7, 5, 5, 3, 5, 5, 5, 3, 5, 3, 5, 5, 5, 3, 5, 5, 7, 5],
              [5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]];
            print2d(arr);
          }
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
        menu(player, game);
      }
      break;
    case 0:process.exit();
  }
};

module.exports = { menu, logo, printlogo, pointIn };
