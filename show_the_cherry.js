// import { __esModule } from 'table/dist/getBorderCharacters';

/* let ctx = require('axel');
let arr = [
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5],
  [5, 3, 5, 5, 3, 5, 5, 5, 3, 5, 3, 5, 5, 5, 3, 5, 5, 3, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
  [5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
  [5, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5], [5, 5, 5, 5, 3, 5, 3, 5, 8, 0, 8, 5, 3, 5, 3, 5, 5, 5, 5],
  [3, 3, 3, 3, 3, 3, 3, 5, 0, 0, 0, 5, 3, 3, 3, 3, 3, 3, 3], [5, 5, 5, 5, 3, 5, 3, 5, 8, 0, 8, 5, 3, 5, 3, 5, 5, 5, 5],
  [5, 5, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5, 5, 5],
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5],
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 3, 5, 5, 3, 5, 5, 5, 3, 5, 3, 5, 5, 5, 3, 5, 5, 3, 5],
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]];
// arr[11][9] = 4;
const print2d = (arr) => {
  let x = 1;
  let y = 1;
  // ctx.clear();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      switch (arr[i][j]) {
        case 5:
          /* for (let x = 0; x < arr.length; x++) {
            for (let y = 0; y < arr[i].length; j++) {
          ctx.bg(0, 128, 255);
          ctx.fg(0, 128, 255);
          ctx.box(x, y, 2, 2);
          break;
        case 3:
          ctx.bg(0, 0, 0);
          ctx.fg(153, 153, 0);
          ctx.text(x, y, '▄');
          break;
        case 8:
          ctx.bg(0, 0, 0);
          ctx.fg(255, 0, 0);
          ctx.text(x, y, '■');
          break;
        case 1:
          ctx.bg(0, 0, 0);
          ctx.fg(255, 255, 0);
          ctx.text(x, y, '█');
          break;
        case 0:
          ctx.bg(0, 0, 0);
          ctx.fg(255, 255, 0);
          ctx.text(x, y, ' ');
          break;
        case 4:
          ctx.bg(0, 0, 0);
          ctx.fg(255, 0, 0);
          ctx.text(x, y, '█');
          break;
        default:
          // process.stdout.write(arr[i + 1][j + 1] + '   ');
      }
      x += 2;
    }
    y += 2;
    x = 1;
    console.log();
  }
};

module.exports = { arr, print2d };
// x:9, y:13
// x11, y:11 */
// let beforeCherry;

const cherry = (player, arr) => {
  // let d;
  if (player.count % 10 === 0) {
    // d = 5;
    if (arr[11][9] !== 4) {
      player.beforeCherry = arr[11][9];
    }
    arr[11][9] = 4;
  }
  /* console.log(d);
  if (d > 0) {
    arr[11][9] = 4;
    d--;
  } */
  if (player.count % 20 === 0) {
    arr[11][9] = player.beforeCherry;
  }
}

;

// console.log(print2d(arr));
module.exports = cherry;
