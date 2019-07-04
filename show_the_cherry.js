
const cherry = (player, arr) => {
  if (player.count % 10 === 0) {
    if (arr[11][9] !== 4) {
      player.beforeCherry = arr[11][9];
    }
    arr[11][9] = 4;
  }
  if (player.count % 20 === 0) {
    arr[11][9] = player.beforeCherry;
  }
};

module.exports = cherry;
