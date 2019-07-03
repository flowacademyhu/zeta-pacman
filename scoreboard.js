const table = require('table');

const selectSort = (arr) => {
  let min = 0; // legkisebb elem indexe
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) { // Min keresés
      if (arr[j] > arr[min]) {
        min = j; // Ha kisebb elemet találtunk, elmentjük az indexét
      }
    }
    let temp = arr[i]; // Megcseréljük a 2 tömbelemet
    arr[i] = arr[min];
    arr[min] = temp;
  } return arr;
};

let tomb = [1, 4, 5, 7, 78, 98, 43, 2, 55, 78, 99, 91, 456];
let rendezett = (selectSort(tomb));

const elsotiz = (arr) => {
  let kiirando = [];
  for (let i = 0; i <= 9; i++) {
    kiirando.push(arr[i]);
  } return kiirando;
};
elsotiz(rendezett);
module.exports = { selectSort, elsotiz };
