let keypress = require('keypress');
process.stdin.setRawMode(true);
process.stdin.resume();

keypress(process.stdin);

process.stdin.on('keypress', function (key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.exit();
  }
});
