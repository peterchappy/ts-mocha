process.env.TS_NODE_PROJECT = './test/paths/tsconfig.json';
process.env.TS_CONFIG_PATHS = true;
require('../..');
const Mocha = require('mocha');
const path = require('path');

const mocha = new Mocha();
mocha.addFile(path.resolve(__dirname, `app.spec.ts`));
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures); // exit with non-zero status if there were failures
  });
});
