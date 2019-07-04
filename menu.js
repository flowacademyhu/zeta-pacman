
let { arr, print2d } = require('./pacmap');
const again = require('./again');
let readlineSync = require('readline-sync');
const { arr1, print2dGameover } = require('./gameover');
const { pointIn, clear, drawScore } = require('./scoreboard');

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

const menu = (player, game, ghost01, ghost02, ghost03, ghost04, pacman) => {
  let menuPoints = ['new game', 'scoreboard'];
  let index = (readlineSync.keyInSelect(menuPoints)) + 1;
  console.clear();
  switch (index) {
    case 1:
      let run = setInterval(function () {
        game(player, arr);
        if (player.life === 2) {
          clearInterval(run);
          clear();
          print2dGameover(arr1);
          pointIn(player);
          drawScore();
          console.log('press \'q\' to quit');
          let quit = readlineSync.keyIn();
          if (quit === 'q') {
            process.exit();
          }
        } else {
          if (player.koszt === 0) {
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
      clear();
      drawScore();
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

module.exports = { menu, logo, printlogo };
