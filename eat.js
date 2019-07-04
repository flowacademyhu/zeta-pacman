const eat = (player, ghost, arr) => {
  player.score = player.score + 200;
  if (ghost.prev === 8) {

  } else {
    arr[ghost.x][ghost.y] = ghost.prev;
  }
  ghost.x = 8;
  ghost.y = 9;
  arr[ghost.x][ghost.y] = 8;
  ghost.prev = 0;
  ghost.count = 0;
  ghost.start = ['', 'up', 'up', 'up'];
};

module.exports = eat;
