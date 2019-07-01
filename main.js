
const map = require('./pacmap');
const move = require('./move');
let player = move.player;
let pacman = move.pacman;
let arr = map.arr;
const menu = require('./menu');
let keypress = require('keypress');
let readlineSync = require('readline-sync');

const mainGame = () => {
  console.clear();
  menu.logo();
  player.name = readlineSync.question('\n\n May I have your name pls? \n\n');
  menu.addtofile(player, game);

  process.stdin.setRawMode(true);
  process.stdin.resume();

  keypress(process.stdin);

  process.stdin.on('keypress', function (ch, key) {
    // if (['left', 'up', 'right', 'down', 'c'].includes(key.name)) {
    if (key && key.ctrl && key.name === 'c') {
      process.exit();
    }
    if ((key.name === 'up' && arr[pacman.x - 1][pacman.y] === 5) || (key.name === 'down' && arr[pacman.x + 1][pacman.y] === 5) ||
  (key.name === 'left' && arr[pacman.x][pacman.y - 1] === 5) || (key.name === 'right' && arr[pacman.x][pacman.y + 1] === 5)) {

    } else {
      pacman.direct = key.name;
    }
  /* }else {
      console.log('itt van?');
      process.stdout.write(key.name);
    } */
  });
};

const game = (player) => {
  move.move(arr, player, pacman);
  map.print2d(arr);
  console.log(player.score);
  console.log(player.life);
  player.count++;
  console.log(player.count);
};

mainGame();
