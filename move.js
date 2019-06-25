// w-up
// s-down
// a-left
// d-right
// x: sorok
// y: oszlopok
const ghostMove = require('./ghost-move');
let ghost01 = ghostMove.ghost01;
let ghost02 = ghostMove.ghost02;
let ghost03 = ghostMove.ghost03;
let ghost04 = ghostMove.ghost04;

let pacman = {
  x: 13,
  y: 9,
  direct: 0
};

let player = {
  score: 0
};

const move = (arr, player, pacman) => {
  switch (pacman.direct) {
    case 'up':
      if (arr[pacman.x - 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x - 1][pacman.y] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0;// ahol pacman eddig állt, az üres lesz
        arr[pacman.x - 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
        pacman.x = pacman.x - 1;// pacman koordinátája
      }
      ghost01.direct = ghostMove.searchDirect(arr, ghost01);
      ghostMove.ghostMove(arr, ghost01);
      ghost02.direct = ghostMove.searchDirect(arr, ghost02);
      ghostMove.ghostMove(arr, ghost02);
      ghost03.direct = ghostMove.searchDirect(arr, ghost03);
      ghostMove.ghostMove(arr, ghost03);
      ghost04.direct = ghostMove.searchDirect(arr, ghost04);
      ghostMove.ghostMove(arr, ghost04);
      break;
    case 'down':
      if (arr[pacman.x + 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x + 1][pacman.y] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
        arr[pacman.x + 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
        pacman.x = pacman.x + 1; // pacman koordinátája
      }
      ghost01.direct = ghostMove.searchDirect(arr, ghost01);
      ghostMove.ghostMove(arr, ghost01);
      ghost02.direct = ghostMove.searchDirect(arr, ghost02);
      ghostMove.ghostMove(arr, ghost02);
      ghost03.direct = ghostMove.searchDirect(arr, ghost03);
      ghostMove.ghostMove(arr, ghost03);
      ghost04.direct = ghostMove.searchDirect(arr, ghost04);
      ghostMove.ghostMove(arr, ghost04);
      break;
    case 'left':
      if (arr[pacman.x][pacman.y - 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x][pacman.y - 1] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
        arr[pacman.x][pacman.y - 1] = 1; // ahová pacman megy, ott pacman lesz
        pacman.y = pacman.y - 1; // pacman koordinátája
      }
      ghost01.direct = ghostMove.searchDirect(arr, ghost01);
      ghostMove.ghostMove(arr, ghost01);
      ghost02.direct = ghostMove.searchDirect(arr, ghost02);
      ghostMove.ghostMove(arr, ghost02);
      ghost03.direct = ghostMove.searchDirect(arr, ghost03);
      ghostMove.ghostMove(arr, ghost03);
      ghost04.direct = ghostMove.searchDirect(arr, ghost04);
      ghostMove.ghostMove(arr, ghost04);
      break;
    case 'right':

      if (arr[pacman.x][pacman.y + 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x][pacman.y + 1] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
        arr[pacman.x][pacman.y + 1] = 1; // ahová pacman megy, ott pacman lesz
        pacman.y = pacman.y + 1; // pacman koordinátája
      }
      ghost01.direct = ghostMove.searchDirect(arr, ghost01);
      ghostMove.ghostMove(arr, ghost01);
      ghost02.direct = ghostMove.searchDirect(arr, ghost02);
      ghostMove.ghostMove(arr, ghost02);
      ghost03.direct = ghostMove.searchDirect(arr, ghost03);
      ghostMove.ghostMove(arr, ghost03);
      ghost04.direct = ghostMove.searchDirect(arr, ghost04);
      ghostMove.ghostMove(arr, ghost04);
      break;
  }
};

module.exports = {
  pacman,
  player,
  move
};
