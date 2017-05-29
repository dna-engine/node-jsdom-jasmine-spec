///////////////////////////////////
// dnajs-node-jsdom-jasmine-spec //
///////////////////////////////////

// Run:
//    $ cd dnajs-node-jsdom-jasmine-spec
//    $ npm test

const html = `
<!doctype html>
<html lang=en>
   <head>
      <meta charset=utf-8>
      <title>Specification Runner</title>
   </head>
   <body>
      <p id=task class=dna-template>~~title~~</p>
   </body>
</html>
`;

const { JSDOM } = require('jsdom');
const window =    new JSDOM(html).window;
const $ =         require('jquery')(window);
const dna =       require('dna.js')(window, $);
const app =          require('./app.js')(window, $, dna);
const Jasmine =      require('jasmine');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const jasmine = new Jasmine().jasmine.getEnv();
jasmine.addReporter(new SpecReporter());

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Utility function dna.array.fromMap()', () => {
   it('converts a map into an array of maps', () => {
      const map = { a: { word: 'Ant' }, b: { word: 'Bat' } };
      const actual =   dna.array.fromMap(map, 'letter');
      const expected = [{ word: 'Ant', letter: 'a' }, { word: 'Bat', letter: 'b' }];
      expect(actual).toEqual(expected);
      });
   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Lunch', () => {
   it('is ording and eating bulgogi', () => {
      app.doLunch();
      const actual =   dna.getModel('task');
      const expected = [{ title: 'Order bulgogi' }, { title: 'Eat bulgogi' }];
      expect(actual).toEqual(expected);
      });
   });

////////////////////////////////////////////////////////////////////////////////////////////////////
jasmine.execute();
