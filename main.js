const map = require('./pacmap');
const move = require('./move');
let player = move.player;
let pacman = move.pacman;
let count = 0;

let arr = map.arr;
map.print2d(arr);

let keypress = require('keypress');
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

const game = () => {
  move.move(arr, player, pacman, count);
  console.clear();
  map.print2d(arr);
  console.log(player.score);
  console.log(player.life);
  count++;
};

setInterval(game, 1500);
