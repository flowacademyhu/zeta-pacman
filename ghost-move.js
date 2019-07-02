
// x: sorok
// y: oszlopok

let ghost01 = {
  x: 7,
  y: 8,
  prev: 0,
  direct: 0,
  start: ['', 'right', 'up'],
  count: 0
};

let ghost02 = {
  x: 9,
  y: 8,
  prev: 0,
  direct: 0,
  start: ['', '', '', '', '', '', '', 'right', 'up', 'up', 'up'],
  count: 0
};

let ghost03 = {
  x: 7,
  y: 10,
  prev: 0,
  direct: 0,
  start: ['', '', '', '', '', 'left', 'up'],
  count: 0
};

let ghost04 = {
  x: 9,
  y: 10,
  prev: 0,
  direct: 0,
  start: ['', '', '', '', '', '', '', '', '', '', '', 'left', 'up', 'up', 'up'],
  count: 0
};

// let deltaX = [0, -1, 0, 1];
// let deltaY = [-1, 0, 1, 0];

const searchDirect = (arr, ghost, pacman) => {
  let ghostDirect = ['up', 'down', 'left', 'right']; // lehetséges irányok
  let moveDirect = [];
  let moveToPlace = [arr[ghost.x - 1][ghost.y], arr[ghost.x + 1][ghost.y], arr[ghost.x][ghost.y - 1], arr[ghost.x][ghost.y + 1]]; // megvizsgáljuk, hogy milyen mezőkre léphet
  for (let i = 0; i < moveToPlace.length; i++) {
    if (moveToPlace[i] !== 5) {
      moveDirect.push(ghostDirect[i]); // azoknak a mezőknek, amik nem falak, belegyűjtjük az irányát egy tömbbe
    }
  }
  let randomDir;
  let countLeft = 0;
  let count2Left = 0;
  if (pacman.x === ghost.x && pacman.y < ghost.y) {
    for (let i = 0; i < moveDirect.length; i++) {
      if (moveDirect[i] === 'left') {
        countLeft++;
      }
    }
    for (let i = pacman.y + 1; i < ghost.y; i++) {
      if (arr[pacman.x][i] !== 5) {
        count2Left++;
      }
    }
  }
  let countRight = 0;
  let count2Right = 0;
  if (pacman.x === ghost.x && pacman.y > ghost.y) {
    for (let i = 0; i < moveDirect.length; i++) {
      if (moveDirect[i] === 'right') {
        countRight++;
      }
    }
    for (let i = ghost.y + 1; i < pacman.y; i++) {
      if (arr[pacman.x][i] !== 5) {
        count2Right++;
      }
    }
  }
  let countDown = 0;
  let count2Down = 0;
  if (pacman.y === ghost.y && pacman.x > ghost.x) {
    for (let i = 0; i < moveDirect.length; i++) {
      if (moveDirect[i] === 'down') {
        countDown++;
      }
    }
    for (let i = ghost.x + 1; i < pacman.x; i++) {
      if (arr[i][pacman.y] !== 5) {
        count2Down++;
      }
    }
  }
  let countUp = 0;
  let count2Up = 0;
  if (pacman.y === ghost.y && pacman.x < ghost.x) {
    for (let i = 0; i < moveDirect.length; i++) {
      if (moveDirect[i] === 'up') {
        countUp++;
      }
    }
    for (let i = pacman.x + 1; i < ghost.x; i++) {
      if (arr[i][pacman.y] !== 5) {
        count2Up++;
      }
    }
  }

  if (pacman.y === ghost.y && pacman.x < ghost.x && countUp === 1 && count2Up === ghost.x - pacman.x - 1) {
    randomDir = 'up';
  } else {
    if (pacman.y === ghost.y && pacman.x > ghost.x && countDown === 1 && count2Down === pacman.x - ghost.x - 1) {
      randomDir = 'down';
    } else {
      if (pacman.x === ghost.x && pacman.y > ghost.y && countRight === 1 && count2Right === pacman.y - ghost.y - 1) {
        randomDir = 'right';
      } else {
        if (pacman.x === ghost.x && pacman.y < ghost.y && countLeft === 1 && count2Left === ghost.y - pacman.y - 1) {
          randomDir = 'left';
        } else {
          switch (ghost.direct) { // Kivesszük ebből a tömbből azt az irányt, ami az előző iránnyal ellentétes (előre haladjon, ne lépjen vissza)
            case 'up':
              for (let i = 0; i < moveDirect.length; i++) {
                if (moveDirect[i] === 'down') {
                  moveDirect.splice(i, 1);
                }
              }
              break;
            case 'down':
              for (let i = 0; i < moveDirect.length; i++) {
                if (moveDirect[i] === 'up') {
                  moveDirect.splice(i, 1);
                }
              }
              break;
            case 'right':
              for (let i = 0; i < moveDirect.length; i++) {
                if (moveDirect[i] === 'left') {
                  moveDirect.splice(i, 1);
                }
              }
              break;
            case 'left':
              for (let i = 0; i < moveDirect.length; i++) {
                if (moveDirect[i] === 'right') {
                  moveDirect.splice(i, 1);
                }
              }
              break;
          }
          randomDir = moveDirect[Math.floor(Math.random() * moveDirect.length)]; // a megmaradt irányokból random sorsolunk egyet
        }
      }
    }
  }
  return randomDir;
};

const ghostMove = (arr, ghost) => {
  switch (ghost.direct) {
    case 'up':
      if (ghost.prev === 8) { // Ha szellem szellemmel találkozik, akkor ne tárolja őt el a prev-be, ne rakjon vissza lenyomat szellemet

      } else {
        arr[ghost.x][ghost.y] = ghost.prev;// ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      }
      if (arr[ghost.x - 1][ghost.y] === 1) { // Ha ott ahova lépne pacman van, adjon vissza false-ot, egyébként true-t
        return false;
      } else {
        ghost.prev = arr[ghost.x - 1][ghost.y]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
        arr[ghost.x - 1][ghost.y] = 8; // ahova megy, ott szellem lesz
        ghost.x = ghost.x - 1;// szellem koordinátái
        return true;
      }
    case 'down':
      if (ghost.prev === 8 || ghost.prev === 1) {

      } else {
        arr[ghost.x][ghost.y] = ghost.prev;// ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      }
      if (arr[ghost.x + 1][ghost.y] === 1) { // Ha ott ahova lépne pacman van, adjon vissza false-ot, egyébként true-t
        return false;
      } else {
        ghost.prev = arr[ghost.x + 1][ghost.y]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
        arr[ghost.x + 1][ghost.y] = 8; // ahova megy, ott szellem lesz
        ghost.x = ghost.x + 1;// szellem koordinátái
        return true;
      }
    case 'left':
      if (ghost.prev === 8 || ghost.prev === 1) {

      } else {
        arr[ghost.x][ghost.y] = ghost.prev; // ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      }
      if (ghost.x === 8 && ghost.y === 0) {
        if (arr[ghost.x][18] === 1) {
          return false;
        } else {
          ghost.prev = arr[ghost.x][18]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
          arr[ghost.x][18] = 8; // ahova megy, ott szellem lesz
          ghost.y = 18;// szellem koordinátái
          return true;
        }
      } else {
        if (arr[ghost.x][ghost.y - 1] === 1) { // Ha ott ahova lépne pacman van, adjon vissza false-ot, egyébként true-t
          return false;
        } else {
          ghost.prev = arr[ghost.x][ghost.y - 1]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
          arr[ghost.x][ghost.y - 1] = 8; // ahova megy, ott szellem lesz
          ghost.y = ghost.y - 1;// szellem koordinátái
          return true;
        }
      }
    case 'right':
      if (ghost.prev === 8 || ghost.prev === 1) {

      } else {
        arr[ghost.x][ghost.y] = ghost.prev; // ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      }
      if (ghost.x === 8 && ghost.y === 18) {
        if (arr[ghost.x][0] === 1) {
          return false;
        } else {
          ghost.prev = arr[ghost.x][0]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
          arr[ghost.x][0] = 8; // ahova megy, ott szellem lesz
          ghost.y = 0;// szellem koordinátái
          return true;
        }
      } else {
        if (arr[ghost.x][ghost.y + 1] === 1) { // Ha ott ahova lépne pacman van, adjon vissza false-ot, egyébként true-t
          return false;
        } else {
          ghost.prev = arr[ghost.x][ghost.y + 1]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
          arr[ghost.x][ghost.y + 1] = 8; // ahova megy, ott szellem lesz
          ghost.y = ghost.y + 1;// szellem koordinátái
          return true;
        }
      }
  }
};

module.exports = {
  ghost01,
  ghost02,
  ghost03,
  ghost04,
  searchDirect,
  ghostMove
};
