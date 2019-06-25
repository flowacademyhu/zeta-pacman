
// x: sorok
// y: oszlopok

let ghost = {
  x: 3,
  y: 3,
  prev: 0,
  direct: 'up'
};

const searchDirect = () => {
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
// ghost.direct = searchDirect();

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
  ghost,
  searchDirect,
  ghostMove
};
