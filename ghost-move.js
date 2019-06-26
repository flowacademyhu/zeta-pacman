
// x: sorok
// y: oszlopok

let ghost01 = {
  x: 7,
  y: 8,
  prev: 0,
  direct: 'up'
};

let ghost02 = {
  x: 9,
  y: 8,
  prev: 0,
  direct: 'up'
};

let ghost03 = {
  x: 7,
  y: 10,
  prev: 0,
  direct: 'up'
};

let ghost04 = {
  x: 9,
  y: 10,
  prev: 0,
  direct: 'up'
};

const searchDirect = (arr, ghost) => {
  let ghostDirect = ['up', 'down', 'left', 'right'];
  let moveDirect = [];
  let moveToPlace = [arr[ghost.x - 1][ghost.y], arr[ghost.x + 1][ghost.y], arr[ghost.x][ghost.y - 1], arr[ghost.x][ghost.y + 1]];
  for (let i = 0; i < moveToPlace.length; i++) {
    if (moveToPlace[i] !== 5) {
      moveDirect.push(ghostDirect[i]);
    }
  }
  switch (ghost.direct) {
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
  let randomDir = moveDirect[Math.floor(Math.random() * moveDirect.length)];
  return randomDir;
};

const ghostMove = (arr, ghost, player) => {
  switch (ghost.direct) {
    case 'up':
      if (ghost.prev === 8) { // Ha szellem szellemmel találkozik, akkor ne rakjon vissza lenyomat szellemet

      } else {
        arr[ghost.x][ghost.y] = ghost.prev;// ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      }
      if (arr[ghost.x - 1][ghost.y] === 1) { // Ha ott ahova lépne pacman van, csökkenjen eggyel az élet és mindenki menjen vissza eredeti helyére
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
      if (arr[ghost.x + 1][ghost.y] === 1) {
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
      if (arr[ghost.x][ghost.y - 1] === 1) {
        return false;
      } else {
        ghost.prev = arr[ghost.x][ghost.y - 1]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
        arr[ghost.x][ghost.y - 1] = 8; // ahova megy, ott szellem lesz
        ghost.y = ghost.y - 1;// szellem koordinátái
        return true;
      }
    case 'right':
      if (ghost.prev === 8 || ghost.prev === 1) {

      } else {
        arr[ghost.x][ghost.y] = ghost.prev; // ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      }
      if (arr[ghost.x][ghost.y + 1] === 1) {
        return false;
      } else {
        ghost.prev = arr[ghost.x][ghost.y + 1]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
        arr[ghost.x][ghost.y + 1] = 8; // ahova megy, ott szellem lesz
        ghost.y = ghost.y + 1;// szellem koordinátái
        return true;
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
