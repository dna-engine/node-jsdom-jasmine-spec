///////////////////////////////////
// dnajs-node-jsdom-jasmine-spec //
///////////////////////////////////

// Run:
//    $ cd dnajs-node-jsdom-jasmine-spec
//    $ npm update
//    $ node spec.js

var html = `
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

var document =     require('jsdom').jsdom(html);
var window =       document.defaultView;
var $ =            require('jquery')(window);
var dna =          require('dna.js')(window, $);
var app =          require('./app.js')(window, $, dna);
var Jasmine =      require('jasmine');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var jasmine = new Jasmine().jasmine.getEnv();
jasmine.addReporter(new SpecReporter());

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Utility function dna.array.fromMap()', () => {
   it('converts a map into an array of maps', () => {
      var map = { a: { word: 'Ant' }, b: { word: 'Bat' } };
      var actual = dna.array.fromMap(map, 'letter');
      var expected = [{ word: 'Ant', letter: 'a' }, { word: 'Bat', letter: 'b' }];
      expect(actual).toEqual(expected);
      });
   });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Lunch', () => {
   it('is ording and eating bulgogi', () => {
      app.doLunch();
      var actual = dna.getModel('task');
      var expected = [{ title: 'Order bulgogi' }, { title: 'Eat bulgogi' }];
      expect(actual).toEqual(expected);
      });
   });

jasmine.execute();
