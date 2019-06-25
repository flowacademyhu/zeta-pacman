
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
  let randomDir = moveDirect[Math.floor(Math.random() * moveDirect.length)];
  return randomDir;
};

const ghostMove = (arr, ghost) => {
  switch (ghost.direct) {
    case 'up':
      arr[ghost.x][ghost.y] = ghost.prev; // ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      ghost.prev = arr[ghost.x - 1][ghost.y]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
      arr[ghost.x - 1][ghost.y] = 8; // ahova megy, ott szellem lesz
      ghost.x = ghost.x - 1; // szellem koordinátái
      break;
    case 'down':
      arr[ghost.x][ghost.y] = ghost.prev; // ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      ghost.prev = arr[ghost.x + 1][ghost.y]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
      arr[ghost.x + 1][ghost.y] = 8; // ahova megy, ott szellem lesz
      ghost.x = ghost.x + 1; // szellem koordinátái
      break;
    case 'left':
      arr[ghost.x][ghost.y] = ghost.prev; // ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      ghost.prev = arr[ghost.x][ghost.y - 1]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
      arr[ghost.x][ghost.y - 1] = 8; // ahova megy, ott szellem lesz
      ghost.y = ghost.y - 1; // szellem koordinátái
      break;
    case 'right':
      arr[ghost.x][ghost.y] = ghost.prev; // ahonnan elmegy oda visszakerül az ami eredetileg ott volt
      ghost.prev = arr[ghost.x][ghost.y + 1]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
      arr[ghost.x][ghost.y + 1] = 8; // ahova megy, ott szellem lesz
      ghost.y = ghost.y + 1; // szellem koordinátái
      break;
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
