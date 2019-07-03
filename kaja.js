const game = require('./main');

const vanekaja = (arr, player) => {
  player.koszt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 3) {
        player.koszt += 1;
      }
    }
  }
  if (player.koszt === 140) {
    let run = setInterval(function () {
      game(player);
      if (player.life === 0) {
        clearInterval(run);
        drawScore();
      }
    }, 1000);
  }
};

module.exports = vanekaja;
