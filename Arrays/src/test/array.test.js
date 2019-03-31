const {sampleTest} = require('../array');

test('should return 1',()=>{
  var actual = sampleTest();
  expect(actual).toBe(1);
});