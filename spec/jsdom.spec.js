/////////////////////////////
// node-jsdom-jasmine-spec //
/////////////////////////////

// Run:
//    $ cd node-jsdom-jasmine-spec
//    $ npm test

// Imports
import { app } from '../app.js';
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import { dna } from 'dna-engine';
import { JSDOM } from 'jsdom';

// Setup
const html = `
<!doctype html>
<html lang=en>
   <head>
      <meta charset=utf-8>
      <title>Specification Runner</title>
   </head>
   <body>
      <h2 id=task class=dna-template>~~title~~</h2>
   </body>
</html>
`;
const dom = new JSDOM(html);
dna.initGlobal(dom.window);
app.init(dom.window, dna);

////////////////////////////////////////////////////////////////////////////////
describe('Utility function dna.array.fromMap()', () => {

   it('converts a map into an array of maps', () => {
      const map =      { a: { word: 'Ant' }, b: { word: 'Bat' } };
      const actual =   dna.array.fromMap(map, { key: 'letter' });
      const expected = [{ word: 'Ant', letter: 'a' }, { word: 'Bat', letter: 'b' }];
      assertDeepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////
describe('Lunch', () => {

   it('is ording and eating bulgogi', () => {
      app.doLunch();
      const actual =   dna.getModels('task');
      const expected = [{ title: 'Order bulgogi' }, { title: 'Eat bulgogi' }];
      assertDeepStrictEqual(actual, expected);
      });

   });
