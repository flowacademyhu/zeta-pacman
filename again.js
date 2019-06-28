
const again = (player, ghost01, ghost02, ghost03, ghost04, pacman, arr) => {
  player.life = player.life - 1; // élet csökken eggyel
  arr[ghost01.x][ghost01.y] = ghost01.prev; // ahol eddig szellem volt, visszarakjuk azt ami eredetileg ott volt
  ghost01.x = 7; // visszaállítjuk a szellemek adatait a kezdetire
  ghost01.y = 8;
  ghost01.prev = 0;
  arr[ghost02.x][ghost02.y] = ghost02.prev;
  ghost02.x = 9;
  ghost02.y = 8;
  ghost02.prev = 0;
  arr[ghost03.x][ghost03.y] = ghost03.prev;
  ghost03.x = 7;
  ghost03.y = 10;
  ghost03.prev = 0;
  arr[ghost04.x][ghost04.y] = ghost04.prev;
  ghost04.x = 9;
  ghost04.y = 10;
  ghost04.prev = 0;
  arr[pacman.x][pacman.y] = 0;
  pacman.x = 13;
  pacman.y = 9;
  pacman.direct = 0;
  arr[ghost01.x][ghost01.y] = 8; // szellemek és pacman visszamennek a helyükre
  arr[ghost02.x][ghost02.y] = 8;
  arr[ghost03.x][ghost03.y] = 8;
  arr[ghost04.x][ghost04.y] = 8;
  arr[pacman.x][pacman.y] = 1;
};

module.exports = again;
