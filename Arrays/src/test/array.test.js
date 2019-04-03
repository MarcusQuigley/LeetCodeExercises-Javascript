const{ missingNumber } = require('../array');
test('should equal 4',()=>{
  var nums = [0,3,2,1,5];
  var actual = missingNumber(nums);
  expect(actual).toEqual(4);

});

test('should equal 0',()=>{
  var nums = [1];
  var actual = missingNumber(nums);
  expect(actual).toEqual(0);

});

test('should equal 1',()=>{
  var nums = [0];
  var actual = missingNumber(nums);
  expect(actual).toEqual(1);

});