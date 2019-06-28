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
let again = require('./again');

let pacman = {
  x: 13,
  y: 9,
  direct: 0
};

let player = {
  score: 0,
  life: 3
};

const move = (arr, player, pacman, count) => {
  switch (pacman.direct) {
    case 'up':
      if (arr[pacman.x - 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x - 1][pacman.y] === 5) { // ha ott ahová megy fal van, akkor ne mozduljon sehová

      } else {
        if (arr[pacman.x - 1][pacman.y] === 8) { // ha ott ahová megy szellem van, akkor elölről kezdődik
          again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
          // !!!!!!   count = 0;
        } else {
          arr[pacman.x][pacman.y] = 0;// ahol pacman eddig állt, az üres lesz
          arr[pacman.x - 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
          pacman.x = pacman.x - 1;// pacman koordinátája
        }
      }
      break;
    case 'down':
      if (arr[pacman.x + 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x + 1][pacman.y] === 5) {

      } else {
        if (arr[pacman.x + 1][pacman.y] === 8) {
          again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
          //   !!!!!!!!   count = 0;
        } else {
          arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
          arr[pacman.x + 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
          pacman.x = pacman.x + 1; // pacman koordinátája
        }
      }
      break;
    case 'left':
      if (arr[pacman.x][pacman.y - 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x][pacman.y - 1] === 5) {

      } else {
        if (arr[pacman.x][pacman.y - 1] === 8) {
          again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
          //   !!!!!!!!!   count = 0;
        } else {
          arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
          arr[pacman.x][pacman.y - 1] = 1; // ahová pacman megy, ott pacman lesz
          pacman.y = pacman.y - 1; // pacman koordinátája
        }
      }
      break;
    case 'right':

      if (arr[pacman.x][pacman.y + 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x][pacman.y + 1] === 5) {

      } else {
        if (arr[pacman.x][pacman.y + 1] === 8) {
          again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
          //    !!!!!!!   count = 0;
        } else {
          arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
          arr[pacman.x][pacman.y + 1] = 1; // ahová pacman megy, ott pacman lesz
          pacman.y = pacman.y + 1; // pacman koordinátája
        }
      }
      break;
  }
  if (count < ghost01.start.length) {
    ghost01.direct = ghost01.start[count];
  } else {
    ghost01.direct = ghostMove.searchDirect(arr, ghost01, pacman);
  }
  if (count < ghost02.start.length) {
    ghost02.direct = ghost02.start[count];
  } else {
    ghost02.direct = ghostMove.searchDirect(arr, ghost02, pacman);
  }
  if (count < ghost03.start.length) {
    ghost03.direct = ghost03.start[count];
  } else {
    ghost03.direct = ghostMove.searchDirect(arr, ghost03, pacman);
  }
  if (count < ghost04.start.length) {
    ghost04.direct = ghost04.start[count];
  } else {
    ghost04.direct = ghostMove.searchDirect(arr, ghost04, pacman);
  }

  if (ghostMove.ghostMove(arr, ghost01, player) === false || ghostMove.ghostMove(arr, ghost02, player) === false ||
  ghostMove.ghostMove(arr, ghost03, player) === false || ghostMove.ghostMove(arr, ghost04, player) === false) {
    again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr); // ha pacman és szellem találkozott, akkor kezdődjön újra a játék és veszítsünk el egy életet
    //  !!!!!!!!!   count = 0;
  }
};

module.exports = {
  pacman,
  player,
  ghost01,
  ghost02,
  ghost03,
  ghost04,
  move
};
