let arr = [[5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5],
  [5, 3, 5, 5, 3, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5, 5, 5, 3, 5], [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5],
  [5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 3, 5, 3, 5], [5, 3, 3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 3, 5],
  [5, 5, 5, 5, 3, 5, 5, 3, 3, 3, 3, 3, 5, 5, 3, 5, 5, 5, 5], [5, 5, 5, 5, 3, 5, 3, 3, 8, 0, 8, 3, 3, 5, 3, 5, 5, 5, 5],
  [5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 5], [5, 5, 5, 5, 3, 5, 3, 3, 8, 0, 8, 3, 3, 5, 3, 5, 5, 5, 5],
  [5, 5, 5, 5, 3, 5, 5, 3, 3, 3, 3, 3, 5, 5, 3, 5, 5, 5, 5],
  [5, 3, 3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 5, 3, 3, 3, 3, 5], [5, 3, 5, 5, 3, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 3, 5, 3, 5],
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 3, 5, 5, 3, 5, 5, 5, 3, 5, 3, 5, 5, 3, 5, 5, 5, 3, 5],
  [5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]];

console.log(arr);
let table = require('table');
let out = table.table(arr);
console.log(out);
