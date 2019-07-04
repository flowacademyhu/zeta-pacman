
let { arr, print2d } = require('./pacmap');
const again = require('./again');
let readlineSync = require('readline-sync');
let keypress = require('keypress');
const { arr1, print2dGameover } = require('./gameover');
const { pointIn, clear, drawScore } = require('./scoreboard');
const { pacman, player, move, ghost01, ghost02, ghost03, ghost04 } = require('./move');
const cherry = require('./show_the_cherry');

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

const game = () => {
  move(arr, player, pacman);
  print2d(arr, player);
  player.count++;
  cherry(player, arr);
  player.koszt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 3) {
        player.koszt += 1;
      }
    }
  }
};

const run = () => {
  let time = 1000;
  game();
  if (player.life > 0) {
    setTimeout(run, time);
    if (player.koszt === 0) {
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
      print2d(arr, player);
    }
  } else {
    clear();
    print2dGameover(arr1);
    console.log('\n Your scores: ', player.score, '\n');
    pointIn(player);
    drawScore();
    console.log('press \'q\' to quit, press 0 to play again');
    let quit = readlineSync.keyIn();
    if (quit === 'q') {
      process.exit();
    }
    if (quit === '0') {
      clear();
      again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
      player.life = 3;
      player.score = 0;
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
      print2d(arr, player);
      run();
      process.stdin.setRawMode(true);
      process.stdin.resume();

      keypress(process.stdin);

      process.stdin.on('keypress', function (ch, key) {
        if (key && key.ctrl && key.name === 'c') {
          process.exit();
        }
        if (!((key.name === 'up' && arr[pacman.x - 1][pacman.y] === 5) || (key.name === 'down' && arr[pacman.x + 1][pacman.y] === 5) ||
      (key.name === 'left' && arr[pacman.x][pacman.y - 1] === 5) || (key.name === 'right' && arr[pacman.x][pacman.y + 1] === 5))) {
          pacman.direct = key.name;
        }
      });
    }
  }
};

const menu = () => {
  let menuPoints = ['new game', 'scoreboard'];
  let index = (readlineSync.keyInSelect(menuPoints)) + 1;
  console.clear();
  switch (index) {
    case 1:
      run();
      break;
    case 2:
      clear();
      drawScore();
      console.log('press \'q\' to menu');
      let back = readlineSync.keyIn();
      if (back === 'q') {
        console.clear();
        logo();
        menu();
      }
      break;
    case 0:process.exit();
  }
};

module.exports = { menu, logo, printlogo };
