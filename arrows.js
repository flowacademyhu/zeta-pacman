
const arrows = () => {
  let keypress = require('keypress');
  process.stdin.setRawMode(true);
  process.stdin.resume();

  keypress(process.stdin);

  process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name === 'c') {
      process.exit();
    }
  });
};

module.exports = arrows;
