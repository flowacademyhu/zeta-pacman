const map = require('./pacmap');
const move = require('./move');
let player = move.player;
let pacman = move.pacman;
let ghost01 = move.ghost01;
let ghost02 = move.ghost02;
let ghost03 = move.ghost03;
let ghost04 = move.ghost04;

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

/* let arrNew = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 3) {
      arrNew.push([i, j]);
    }
  }
} */

const game = () => {
  move.move(arr, player, pacman);
  console.clear();
  map.print2d(arr);
  console.log(player.score);
  console.log(player.life);
  // console.log(pacman.x, pacman.y);
  // console.log('ghost01:', ghost01.x, ghost01.y);
};

setInterval(game, 1500);
