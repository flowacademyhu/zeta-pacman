// w-up
// s-down
// a-left
// d-right
// x: sorok
// y: oszlopok

let pacman = {
  x: 2,
  y: 2,
  direct: 'w'
};

let player = {
  score: 0
};

const move = (arr, player, pacman) => {
  switch (pacman.direct) {
    case 'w':
      if (arr[pacman.x - 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x - 1][pacman.y] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0;// ahol pacman eddig állt, az üres lesz
        arr[pacman.x - 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
        pacman.x = pacman.x - 1;// pacman koordinátája
      }
      break;
    case 's':
      if (arr[pacman.x + 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x + 1][pacman.y] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
        arr[pacman.x + 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
        pacman.x = pacman.x + 1; // pacman koordinátája
      }
      break;
    case 'a':
      if (arr[pacman.x][pacman.y - 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x][pacman.y - 1] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
        arr[pacman.x][pacman.y - 1] = 1; // ahová pacman megy, ott pacman lesz
        pacman.y = pacman.y - 1; // pacman koordinátája
      }
      break;
    case 'd':

      if (arr[pacman.x][pacman.y + 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
        player.score = player.score + 10;
      }
      if (arr[pacman.x][pacman.y + 1] === 5) {

      } else {
        arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
        arr[pacman.x][pacman.y + 1] = 1; // ahová pacman megy, ott pacman lesz
        pacman.y = pacman.y + 1; // pacman koordinátája
      }
      break;
  }
};

module.exports = {
  pacman,
  player,
  move
};
