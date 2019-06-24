// w-up
// s-down
// a-left
// d-right
// x: sorok
// y: oszlopok

let arr = [[5, 5, 5, 5, 5], [5, 3, 3, 3, 5], [5, 3, 1, 3, 5], [5, 3, 3, 3, 5], [5, 3, 3, 3, 5], [5, 3, 3, 3, 5], [5, 5, 5, 5, 5]];

let pacman = {
  x: 2,
  y: 2
};

let direct = 'w'; // beolvasott irány
let score = 0;

switch (direct) {
  case 'w':

    if (arr[pacman.x - 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
      score = score + 10;
    }
    if (arr[pacman.x - 1][pacman.y] === 5) {

    } else {
      arr[pacman.x][pacman.y] = 0;// ahol pacman eddig állt, az üres lesz
      arr[pacman.x - 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
      pacman.x = pacman.x - 1;// pacman koordinátája
    }
    break;
  case 's':
    arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
    if (arr[pacman.x + 1][pacman.y] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
      score = score + 10;
    }
    arr[pacman.x + 1][pacman.y] = 1; // ahová pacman megy, ott pacman lesz
    pacman.x = pacman.x + 1; // pacman koordinátája
    break;
  case 'a':
    arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
    if (arr[pacman.x][pacman.y - 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
      score = score + 10;
    }
    arr[pacman.x][pacman.y - 1] = 1; // ahová pacman megy, ott pacman lesz
    pacman.y = pacman.y - 1; // pacman koordinátája
    break;
  case 'd':
    arr[pacman.x][pacman.y] = 0; // ahol pacman eddig állt, az üres lesz
    if (arr[pacman.x][pacman.y + 1] === 3) { // ha ott ahová megy van kaja, akkor kapunk 10 pontot
      score = score + 10;
    }
    arr[pacman.x][pacman.y + 1] = 1; // ahová pacman megy, ott pacman lesz
    pacman.y = pacman.y + 1; // pacman koordinátája
    break;
}

console.log(arr);
console.log(score);
