const table = require('table');
let ctx = require('axel');
const fs = require('fs');

const pointIn = (player) => {
  fs.appendFileSync('pontok.txt', player.name + ';' + player.score + ';', function (err) {
    if (err) throw err;
  });
};

const clear = () => {
  ctx.bg(0, 0, 0);
  ctx.clear();
};

const drawScore = () => {
  let data = fs.readFileSync('pontok.txt');
  let dataString = data.toString();
  let dataSplit = dataString.split(/[;]/);
  for (let i = 0; i < dataSplit.length; i++) {
    if (dataSplit[i] === '') {
      dataSplit.splice(i, 1);
      i--;
    }
  }
  let tomb = [['Name', 'Score']];

  for (let i = 0; i < dataSplit.length; i++) {
    if (i % 2 === 0) {
      tomb.push([dataSplit[i], Number(dataSplit[i + 1])]);
    }
  }

  let tombSort = selectSort(tomb);
  console.log(table.table(elsotiz(tombSort)));
};

const selectSort = (arr) => {
  let min = 0; // legkisebb elem indexe
  for (let i = 1; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) { // Min keresés
      if (arr[j][1] > arr[min][1]) {
        min = j; // Ha kisebb elemet találtunk, elmentjük az indexét
      }
    }
    let temp = arr[i]; // Megcseréljük a 2 tömbelemet
    arr[i] = arr[min];
    arr[min] = temp;
  } return arr;
};

const elsotiz = (arr) => {
  let kiirando = [];
  for (let i = 0; i < arr.length; i++) {
    if (i <= 9) {
      kiirando.push(arr[i]);
    }
  } return kiirando;
};

module.exports = { selectSort, elsotiz, pointIn, clear, drawScore };
