
const map = require('./pacmap');
const { pacman, player, move, ghost01,
  ghost02,
  ghost03,
  ghost04 } = require('./move');
let arr = map.arr;
const { menu, logo } = require('./menu');

let keypress = require('keypress');
let readlineSync = require('readline-sync');

const mainGame = () => {
  console.clear();
  logo();
  player.name = readlineSync.question('\n\n May I have your name pls? \n\n');
  menu(player, game, ghost01, ghost02, ghost03, ghost04, pacman);

  process.stdin.setRawMode(true);
  process.stdin.resume();

  keypress(process.stdin);

  process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name === 'c') {
      process.exit();
    }
    if ((key.name === 'up' && arr[pacman.x - 1][pacman.y] === 5) || (key.name === 'down' && arr[pacman.x + 1][pacman.y] === 5) ||
  (key.name === 'left' && arr[pacman.x][pacman.y - 1] === 5) || (key.name === 'right' && arr[pacman.x][pacman.y + 1] === 5)) {

    } else {
      pacman.direct = key.name;
    }
  });
};

const game = (player, arr) => {
  move(arr, player, pacman);
  map.print2d(arr);
  console.log(player.score);
  console.log(player.life);
  player.count++;
  player.koszt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 3) {
        player.koszt += 1;
      }
    }
  }
  console.log(player.koszt);
};

mainGame();
