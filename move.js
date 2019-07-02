// x: sorok
// y: oszlopok

const ghostMove = require('./ghost-move');
let ghost01 = ghostMove.ghost01;
let ghost02 = ghostMove.ghost02;
let ghost03 = ghostMove.ghost03;
let ghost04 = ghostMove.ghost04;
let again = require('./again');
let eat = require('./eat');

let pacman = {
  x: 13,
  y: 9,
  direct: 0
};

let player = {
  score: 0,
  life: 3,
  count: 0,
  name: '',
  slow: 0
};

const move = (arr, player, pacman) => {
  // pacman mozgása
  switch (pacman.direct) {
    case 'up':
      if (arr[pacman.x - 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x - 1][pacman.y] === 7) {
        player.slow = 20;
      }
      if (arr[pacman.x - 1][pacman.y] === 5) { // ha ott ahová megy fal van, akkor ne mozduljon sehová

      } else {
        if (arr[pacman.x - 1][pacman.y] === 8) { // ha ott ahová megy szellem van, akkor elölről kezdődik
          if (player.slow > 0) {
            eat(player, ghost03, arr);
          } else {
            again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
          }
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
      if (arr[pacman.x + 1][pacman.y] === 7) {
        player.slow = 20;
      }
      if (arr[pacman.x + 1][pacman.y] === 5) {

      } else {
        if (arr[pacman.x + 1][pacman.y] === 8) {
          if (player.slow > 0) {
            eat(player, ghost03, arr);
          } else {
            again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
          }
        } else {
          arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
          arr[pacman.x + 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
          pacman.x = pacman.x + 1; // pacman koordinátája
        }
      }
      break;
    case 'left':
      // ha kimegy a pálya szélén
      if (pacman.x === 8 && pacman.y === 0) {
        if (arr[pacman.x][18] === 8) {
          again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
        } else {
          if (arr[pacman.x][18] === 3) {
            player.score = player.score + 10;
          }
          arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
          arr[pacman.x][18] = 1; // ahová pacman megy, ott pacman lesz
          pacman.y = 18; // pacman koordinátája
        }
        // ha pályán belül mozog
      } else {
        if (arr[pacman.x][pacman.y - 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
          player.score = player.score + 10;
        }
        if (arr[pacman.x][pacman.y - 1] === 7) {
          player.slow = 20;
        }
        if (arr[pacman.x][pacman.y - 1] === 5) {

        } else {
          if (arr[pacman.x][pacman.y - 1] === 8) {
            if (player.slow > 0) {
              eat(player, ghost03, arr);
            } else {
              again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
            }
          } else {
            arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
            arr[pacman.x][pacman.y - 1] = 1; // ahová pacman megy, ott pacman lesz
            pacman.y = pacman.y - 1; // pacman koordinátája
          }
        }
      }
      break;
    case 'right':
      // ha kimegy a pálya szélén
      if (pacman.x === 8 && pacman.y === 18) {
        if (arr[pacman.x][0] === 8) {
          again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
        } else {
          if (arr[pacman.x][0] === 3) {
            player.score = player.score + 10;
          }
          arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
          arr[pacman.x][0] = 1; // ahová pacman megy, ott pacman lesz
          pacman.y = 0; // pacman koordinátája
        }
        // ha pályán belül mozog
      } else {
        if (arr[pacman.x][pacman.y + 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
          player.score = player.score + 10;
        }
        if (arr[pacman.x][pacman.y + 1] === 7) {
          player.slow = 20;
        }
        if (arr[pacman.x][pacman.y + 1] === 5) {

        } else {
          if (arr[pacman.x][pacman.y + 1] === 8) {
            if (player.slow > 0) {
              eat(player, ghost03, arr);
            } else {
              again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
            }
          } else {
            arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
            arr[pacman.x][pacman.y + 1] = 1; // ahová pacman megy, ott pacman lesz
            pacman.y = pacman.y + 1; // pacman koordinátája
          }
        }
      }
      break;
  }

  if (player.slow > 0) {
    player.slow--;
    if (player.count % 2 === 0) {
      // a szellemek sorban egymás után induljanak el
      if (ghost01.count < ghost01.start.length) {
        ghost01.direct = ghost01.start[ghost01.count];
      } else {
        ghost01.direct = ghostMove.searchDirect(arr, ghost01, pacman);
      }
      if (ghost02.count < ghost02.start.length) {
        ghost02.direct = ghost02.start[ghost02.count];
      } else {
        ghost02.direct = ghostMove.searchDirect(arr, ghost02, pacman);
      }
      if (ghost03.count < ghost03.start.length) {
        ghost03.direct = ghost03.start[ghost03.count];
      } else {
        ghost03.direct = ghostMove.searchDirect(arr, ghost03, pacman);
      }
      if (ghost04.count < ghost04.start.length) {
        ghost04.direct = ghost04.start[ghost04.count];
      } else {
        ghost04.direct = ghostMove.searchDirect(arr, ghost04, pacman);
      }

      // ha pacman és szellem találkozott, akkor kezdődjön újra a játék és veszítsünk el egy életet
      if (ghostMove.ghostMove(arr, ghost01) === false) {
        eat(player, ghost01, arr);
      }
      if (ghostMove.ghostMove(arr, ghost02) === false) {
        eat(player, ghost02, arr);
      }
      if (ghostMove.ghostMove(arr, ghost03) === false) {
        eat(player, ghost03, arr);
      }
      if (ghostMove.ghostMove(arr, ghost04) === false) {
        eat(player, ghost04, arr);
      }
      ghost01.count++;
      ghost02.count++;
      ghost03.count++;
      ghost04.count++;
    }
  } else {
    if (ghost01.count < ghost01.start.length) {
      ghost01.direct = ghost01.start[ghost01.count];
    } else {
      ghost01.direct = ghostMove.searchDirect(arr, ghost01, pacman);
    }
    if (ghost02.count < ghost02.start.length) {
      ghost02.direct = ghost02.start[ghost02.count];
    } else {
      ghost02.direct = ghostMove.searchDirect(arr, ghost02, pacman);
    }
    if (ghost03.count < ghost03.start.length) {
      ghost03.direct = ghost03.start[ghost03.count];
    } else {
      ghost03.direct = ghostMove.searchDirect(arr, ghost03, pacman);
    }
    if (ghost04.count < ghost04.start.length) {
      ghost04.direct = ghost04.start[ghost04.count];
    } else {
      ghost04.direct = ghostMove.searchDirect(arr, ghost04, pacman);
    }

    // ha pacman és szellem találkozott, akkor kezdődjön újra a játék és veszítsünk el egy életet
    if (ghostMove.ghostMove(arr, ghost01) === false || ghostMove.ghostMove(arr, ghost02) === false ||
  ghostMove.ghostMove(arr, ghost03) === false || ghostMove.ghostMove(arr, ghost04) === false) {
      again(player, ghost01, ghost02, ghost03, ghost04, pacman, arr);
    }
    ghost01.count++;
    ghost02.count++;
    ghost03.count++;
    ghost04.count++;
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
