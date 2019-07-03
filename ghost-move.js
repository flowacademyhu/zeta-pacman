
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

let deltaX = [0, -1, 0, 1];
let deltaY = [-1, 0, 1, 0];
let direction = ['left', 'up', 'right', 'down'];

const searchDirect = (arr, ghost, pacman) => {
  let moveDirect = [];

  for (let i = 0; i < deltaX.length; i++) {
    if (arr[ghost.x + deltaX[i]][ghost.y + deltaY[i]] !== 5) {
      moveDirect.push(direction[i]); // azoknak a mezőknek, amik nem falak, belegyűjtjük az irányát egy tömbbe
    }
  }

  let randomDir;

  let newX;
  let newY;

  // Rálát-e a szellem Pacman-re?

  for (let i = 0; i < deltaX.length; i++) {
    newX = ghost.x + deltaX[i];
    newY = ghost.y + deltaY[i];
    while (arr[newX][newY] !== 5 && newX >= 0 && newX < arr.length && newY >= 0 && newY < arr[0].length) {
      if (arr[newX][newY] === 1) {
        randomDir = direction[i];
        break;
      }
      newX = newX + deltaX[i];
      newY = newY + deltaY[i];
    }
  }
  if (!randomDir) { // Ha nem lát rá:
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
  return randomDir;
};

/* const ghostMove = (arr, ghost) => {
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
}; */

const ghostMove = (arr, ghost) => {
  let d;
  for (let i = 0; i < direction.length; i++) {
    if (direction[i] === ghost.direct) {
      d = i;
      break;
    }
  }
  if (d !== undefined) {
    if (ghost.prev !== 8 && ghost.prev !== 1) {
      arr[ghost.x][ghost.y] = ghost.prev;// ahonnan elmegy oda visszakerül az ami eredetileg ott volt
    }
    if (d === 2 && ghost.x === 8 && ghost.y === 18) {
      if (arr[ghost.x][0] === 1) {
        return false;
      } else {
        ghost.prev = arr[ghost.x][0]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
        arr[ghost.x][0] = 8; // ahova megy, ott szellem lesz
        ghost.y = 0;// szellem koordinátái
        return true;
      }
    } else {
      if (d === 0 && ghost.x === 8 && ghost.y === 0) {
        if (arr[ghost.x][18] === 1) {
          return false;
        } else {
          ghost.prev = arr[ghost.x][18]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
          arr[ghost.x][18] = 8; // ahova megy, ott szellem lesz
          ghost.y = 18;// szellem koordinátái
          return true;
        }
      } else {
        if (arr[ghost.x + deltaX[d]][ghost.y + deltaY[d]] === 1) { // Ha ott ahova lépne pacman van, adjon vissza false-ot, egyébként true-t
          return false;
        } else {
          ghost.prev = arr[ghost.x + deltaX[d]][ghost.y + deltaY[d]]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
          arr[ghost.x + deltaX[d]][ghost.y + deltaY[d]] = 8; // ahova megy, ott szellem lesz
          ghost.x = ghost.x + deltaX[d];// szellem koordinátái
          ghost.y = ghost.y + deltaY[d];
          return true;
        }
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
  ghostMove,
  deltaX,
  deltaY,
  direction
};
