
const cherry = (player, arr) => {
  if (player.count % 10 === 0) {
    if (arr[11][9] !== 4 && arr[11][9] !== 8 && arr[11][9] !== 1) {
      player.beforeCherry = arr[11][9];
    }
    arr[11][9] = 4;
  }
  if (player.count % 20 === 0) {
    arr[11][9] = player.beforeCherry;
  }
};

module.exports = cherry;
