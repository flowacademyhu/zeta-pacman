let deltaX = [0, -1, 0, 1];
let deltaY = [-1, 0, 1, 0];
let direction = ['left', 'up', 'right', 'down'];
let arr = [
  [5, 5, 5, 5, 5, 5, 5],
  [5, 3, 3, 3, 3, 3, 5],
  [5, 3, 3, 3, 3, 3, 5],
  [5, 3, 3, 8, 3, 3, 5],
  [5, 3, 3, 3, 3, 3, 5],
  [5, 3, 3, 1, 3, 3, 5],
  [5, 5, 5, 5, 5, 5, 5]];
let ghost = {
  x: 3,
  y: 3,
  direct: 'left',
  prev: 3
};

/* let randomDir;
let newX;
let newY;

for (let i = 0; i < deltaX.length; i++) {
  newX = ghost.x + deltaX[i];
  newY = ghost.y + deltaY[i];
  while (arr[newX][newY] !== 5) {
    console.log(newX, newY, arr[newX][newY]);
    if (arr[newX][newY] === 1) {
      randomDir = direction[i];
      break;
    }
    newX = newX + deltaX[i];
    newY = newY + deltaY[i];
  }
}

console.log(arr);
console.log(randomDir); */

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
  if (arr[ghost.x + deltaX[d]][ghost.y + deltaY[d]] === 1) { // Ha ott ahova lépne pacman van, adjon vissza false-ot, egyébként true-t
    console.log('ütközés');
  } else {
    ghost.prev = arr[ghost.x + deltaX[d]][ghost.y + deltaY[d]]; // prev-be elmentjük, hogy mi van ott, ahova menni fog
    arr[ghost.x + deltaX[d]][ghost.y + deltaY[d]] = 8; // ahova megy, ott szellem lesz
    ghost.x = ghost.x + deltaX[d];// szellem koordinátái
    ghost.y = ghost.y + deltaY[d];
  }
}

console.log(arr);
console.log(ghost.x, ghost.y);
