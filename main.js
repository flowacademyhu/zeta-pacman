
const { arr } = require('./pacmap');
const { pacman, player } = require('./move');
const { menu, logo } = require('./menu');

let keypress = require('keypress');
let readlineSync = require('readline-sync');

const mainGame = () => {
  console.clear();
  logo();
  player.name = readlineSync.question('\n\n May I have your name pls? \n\n');
  menu();

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
};

mainGame();
